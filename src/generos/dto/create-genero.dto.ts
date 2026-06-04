import { IsString, IsNumber, IsBoolean, IsOptional } from 'class-validator';

export class CreateGeneroDto {
  @IsString()
  nombre?: string;

  @IsNumber()
  precio?: number;

  @IsOptional()
  @IsBoolean()
  activo?: boolean;
}