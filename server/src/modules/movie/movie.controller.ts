import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseInterceptors,
  UploadedFiles,
  Query,
  DefaultValuePipe,
  ParseIntPipe,
} from '@nestjs/common';
import { MovieService } from './movie.service';
import { CreateMovieDto } from './dto/createMovie.dto';
import { UpdateMovieDto } from './dto/updateMovie.dto';
import currentUser from '../../decorators/currentUser.decorator';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Post()
  @UseInterceptors(FilesInterceptor('files'))
  async create(
    @Body() createMovieDto: CreateMovieDto,
    @UploadedFiles() files: Express.Multer.File,
    @currentUser('id') userId: string,
  ) {
    return await this.movieService.createMovie(createMovieDto, files, userId);
  }
  @Get()
  async findAll() {
    return await this.movieService.findAll();
  }

  @Get(':id')
  async findOneById(@Param('id') id: string) {
    return await this.movieService.findOneById(id);
  }

  @Get('user-movies')
  async findUserMovies(
    @currentUser('id') userId: string,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
  ) {
    return await this.movieService.findUserMovies(userId, { page, limit });
  }

  @Put(':id')
  async updateById(
    @Param('id') id: string,
    @Body() updateMovieDto: UpdateMovieDto,
  ) {
    return await this.movieService.updateById(id, updateMovieDto);
  }

  @Delete(':id')
  async deleteById(@Param('id') id: string) {
    return await this.movieService.deleteById(id);
  }
}
