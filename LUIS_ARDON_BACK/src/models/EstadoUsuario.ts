import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'estado_usuario' })
export class EstadoUsuario {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 50 })
  titulo?: string;

  @Column({ type: 'varchar', length: 50 })
  clave?: string;
}
