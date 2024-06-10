// create-movie.dto.ts

import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMovieDto {
  @ApiProperty({ description: 'The title of the movie', example: 'Inception' })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({ description: 'The year the movie was published', example: '2010' })
  @IsNotEmpty()
  @IsString()
  publishYear: string;

  @IsOptional()
  poster: any;
  
  @ApiProperty({ description: 'The ID of the user who added the movie', example: '12345' })
  @IsString()
  @IsNotEmpty()
  userId: string;
}
