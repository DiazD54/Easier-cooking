// src/perfil/perfil.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('perfiles')
export class Perfil {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    email: string;

    @Column({ nullable: true })
    telefono: string;

    @Column({ nullable: true })
    direccion: string;
}
