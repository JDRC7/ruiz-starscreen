import { IsString, IsUUID, IsInt, IsBoolean, IsOptional, Min, IsNumber } from 'class-validator';

export class CreatePeliculaDto {
  @IsUUID()
  generoId?: string;

  @IsString()
  Titulo?: string;

  @IsString()
  codigo?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  duracion?: number;

  @IsOptional()
  @IsBoolean()
  activo?: boolean;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsNumber()
  precio_entrada?: number;
}