import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tutorial {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    descripcion: string;

    @Column()
    categoria: string;

    @Column()
    nivel: string;

    @Column()
    imagen: string;
}
