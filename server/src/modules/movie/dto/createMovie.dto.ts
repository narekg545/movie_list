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

  @ApiProperty({ description: 'The URL of the movie poster', example: 'https://example.com/poster.jpg' })
  @IsOptional()
  @IsString()
  poster: string;

  @ApiProperty({ description: 'The ID of the user who added the movie', example: '12345' })
  @IsString()
  @IsOptional()
  userId: string;
}
