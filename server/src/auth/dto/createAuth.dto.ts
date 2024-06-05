import { IsString, IsNotEmpty, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AuthDto {
  @ApiProperty({ 
    description: 'The email address of the user',
    example: 'user@example.com'
  })
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ 
    description: 'The password of the user',
    example: 'P@ssw0rd'
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}
