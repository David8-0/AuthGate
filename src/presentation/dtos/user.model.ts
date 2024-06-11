import { IsString, IsEmail, IsOptional, MinLength, IsNumber, IsNotEmpty, Matches } from 'class-validator';

export class userModel {
  @IsString()
  @IsNotEmpty({message:'name is required'})
  name: string;

  @IsString()
  @MinLength(8)
  @IsNotEmpty({message:'password is required'})
  @Matches(/^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/,{
    message:'Password must include a number, lowercase, uppercase, special character'
  })
  password: string;
  confirmPassword: string;

  @Matches(/^\S+@\S+\.\S+$/,{
    message:'email pattern is invalid'
  })
  @IsNotEmpty({message:'email is required'})
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsString()
  image?: string;

  @IsOptional()
  @IsNumber()
  age?: number;
}