import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Pelicula } from '../peliculas/pelicula.entity';

@Entity('generos')
export class Genero {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ unique: true })
  nombre!: string;

  @Column('decimal', { precision: 8, scale: 2 })
  precio!: number;

  @Column({ default: true })
  activo!: boolean;

  @OneToMany(() => Pelicula, (pelicula) => pelicula.genero)
  peliculas!: Pelicula[];
}