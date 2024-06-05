import * as bcrypt from 'bcrypt';
import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
import { excludeField } from 'src/utils/functions';
import { PrismaService } from '../../prisma/prisma.service';
import {
  DESCENDING_ORDER,
  ERROR_MESSAGES,
  HTTP_METHOD,
  PASSWORD,
  saltOrRounds,
} from '../../utils/constants/string.constant';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { email, password } = createUserDto;
    await this.ensureUniqueEmail(email, HTTP_METHOD.POST);
    const hashPassword = await this.hashPassword(password);
    return await this.prisma.user.create({
      data: {
        ...createUserDto,
        password: hashPassword,
      },
    });
  }

  async findAll(): Promise<User[]> {
    const users = await this.prisma.user.findMany({
      orderBy: {
        createdAt: DESCENDING_ORDER,
      },
    });
    return users.map((user) => excludeField(user, PASSWORD)) as User[];
  }

  async findOneById(id: string): Promise<User> {
    const user = await this.findUniqueUser({ where: { id } });
    if (user) {
      return excludeField(user, PASSWORD) as User;
    }
    return user;
  }

  async updateById(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    await this.findUniqueUser({ where: { id } });
    if (updateUserDto.password) {
      updateUserDto.password = await this.hashPassword(updateUserDto.password);
    }
    const updatedUser = await this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });

    return updatedUser;
  }

  async deleteById(id: string): Promise<User> {
    await this.findUniqueUser({ where: { id } });
    return await this.prisma.user.delete({ where: { id } });
  }

  async findUniqueUser(
    where: { where: Prisma.UserWhereUniqueInput },
    method?: string,
  ): Promise<User | undefined> {
    const user = await this.prisma.user.findUnique(where);
    if (!user && method !== HTTP_METHOD.POST)
      throw new NotFoundException(ERROR_MESSAGES.NOT_FOUND);
    return user;
  }

  async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, saltOrRounds);
  }

  async ensureUniqueEmail(email: string, method?: string): Promise<void> {
    const existingUser = await this.findUniqueUser(
      { where: { email } },
      method,
    );
    if (existingUser) {
      throw new ConflictException(ERROR_MESSAGES.EMAIL_TAKEN);
    }
  }
}
