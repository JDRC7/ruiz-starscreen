import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { Genero } from '../generos/genero.entity';

@Entity('peliculas')
export class Pelicula {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => Genero, (genero) => genero.peliculas, { eager: true, onDelete: 'RESTRICT' })
  genero!: Genero;

  @Column()
  titulo!: string;

  @Column({ type: 'text' })
  descripcion!: string;

  @Column({ type: 'date' })
  fecha_lanzamiento!: Date;

  @Column({ default: true })
  activo!: boolean;

  @CreateDateColumn()
  creado_en!: Date;
}