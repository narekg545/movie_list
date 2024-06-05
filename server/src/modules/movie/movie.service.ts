import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/createMovie.dto';
import { UpdateMovieDto } from './dto/updateMovie.dto';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma, Movie } from '@prisma/client';
import {
  DESCENDING_ORDER,
  ERROR_MESSAGES,
  MODEL_NAME,
  SUCCESS_MESSAGES,
} from '../../utils/constants/string.constant';
import { MESSAGES } from '@nestjs/core/constants';
import { CloudinaryService } from '../../cloudinary/cloudinary.service';
import { PaginationOptions } from './interfaces/movie.interface';

@Injectable()
export class MovieService {
  constructor(
    private prisma: PrismaService,
    private cloudinary: CloudinaryService,
  ) {}
  async createMovie(
    createMovieDto: CreateMovieDto,
    file: Express.Multer.File,
    userId: string,
  ): Promise<Movie> {
    if (file) {
      const uploadedImage = await this.cloudinary.uploadImage(file);
      createMovieDto.poster = uploadedImage.secure_url;
    }
    createMovieDto.userId = userId;

    return this.prisma.movie.create({
      data: {
        ...createMovieDto,
      },
    });
  }

  async findAll(): Promise<Movie[]> {
    return await this.prisma.movie.findMany({
      orderBy: {
        createdAt: DESCENDING_ORDER,
      },
    });
  }

  async findOneById(id: string): Promise<Movie> {
    return await this.findUniqueMovie({ where: { id } });
  }

  async updateById(id: string, updateMovieDto: UpdateMovieDto) {
    await this.findUniqueMovie({ where: { id } });
    const movie = await this.prisma.movie.update({
      where: { id },
      data: updateMovieDto,
    });
    return {
      movie,
      message: SUCCESS_MESSAGES.UPDATEMESSAGE(MODEL_NAME.MOVIE),
    };
  }

  async deleteById(id: string) {
    const movie = await this.findUniqueMovie({ where: { id } });
    return {
      movie,
      message: SUCCESS_MESSAGES.DELETEMESSAGE(MODEL_NAME.MOVIE),
    };
  }

  async findUserMovies(
    userId: string,
    options: PaginationOptions,
  ): Promise<Movie[]> {
    const { page, limit } = options;
    const skip = (page - 1) * limit;

    return await this.prisma.movie.findMany({
      where: { userId },
      skip,
      take: limit,
    });
  }

  async findUniqueMovie(where: {
    where: Prisma.MovieWhereUniqueInput;
  }): Promise<Movie | undefined> {
    const movie = await this.prisma.movie.findUnique(where);
    if (!movie) throw new NotFoundException(ERROR_MESSAGES.NOT_FOUND);
    return movie;
  }
}
