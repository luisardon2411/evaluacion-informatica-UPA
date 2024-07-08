import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
  } from 'typeorm';
  import { EstadoUsuario } from './EstadoUsuario';
  
  @Entity({ name: 'usuario' })
  export class Usuario {
    @PrimaryGeneratedColumn()
    id!: number;
  
    @Column({ type: 'varchar', length: 50 })
    nombre!: string;
  
    @Column({ type: 'date' })
    fecha!: string;
  
    @Column({ type: 'varchar', length: 60 })
    correo_electronico!: string;
  
    @Column({ type: 'datetime' })
    creacion!: Date;
  
    @ManyToOne(() => EstadoUsuario)
    @JoinColumn({ name: 'estado_usuario_id' })
    estadoUsuario!: EstadoUsuario;
  }
  