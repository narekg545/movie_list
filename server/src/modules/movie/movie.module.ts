import { Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';
import { PrismaService } from '../../prisma/prisma.service';
import { CloudinaryService } from '../../cloudinary/cloudinary.service';

@Module({
  controllers: [MovieController],
  providers: [MovieService, PrismaService, CloudinaryService],
  exports: [MovieService],
})
export class MovieModule {}
