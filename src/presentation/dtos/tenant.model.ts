import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Matches,
  ValidateNested,
} from 'class-validator';
import { Project } from 'src/domain/entities/project.entity';

export class tenantModel {
  @IsNotEmpty()
  readonly name: string;

  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    {
      message: 'Password too weak',
    },
  )
  password: string;

  @IsNotEmpty()
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    {
      message: 'Password too weak',
    },
  )
  confirmPassword: string;

  @IsOptional()
  @IsString()
  image?: string;

  @IsOptional()
  @IsNumber()
  phone?: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsString()
  website?: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Project)
  @IsOptional()
  projects?: Project[];

  @IsOptional()
  @IsBoolean()
  deleted?: boolean;
}
