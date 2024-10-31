import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tutoriales')
export class Tutorial {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
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
