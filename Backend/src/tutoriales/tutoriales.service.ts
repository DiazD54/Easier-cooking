import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike } from 'typeorm';
import { Tutorial } from './tutorial.entity';

@Injectable()
export class TutorialesService {
    constructor(
        @InjectRepository(Tutorial)
        private tutorialRepository: Repository<Tutorial>,
    ) {}

    async findByCategoria(categoria: string): Promise<Tutorial[]> {
        console.log('Buscando tutoriales para la categoría:', categoria);
        const resultados = await this.tutorialRepository.find({
            where: { categoria: ILike(`%${categoria}%`) },
        });
        console.log('Resultados encontrados:', resultados);
        return resultados;
    }

    async findByNivel(nivel: string): Promise<Tutorial[]> {
        console.log('Buscando tutoriales para el nivel:', nivel);
        const resultados = await this.tutorialRepository.find({
            where: { nivel: ILike(`%${nivel}%`) },
        });
        console.log('Resultados encontrados:', resultados);
        return resultados;
    }

    async findByNivelYCategoria(nivel: string, categoria: string): Promise<Tutorial[]> {
        console.log('Buscando tutoriales para el nivel y categoría:', nivel, categoria);
        const resultados = await this.tutorialRepository.find({
            where: {
                nivel: ILike(`%${nivel}%`),
                categoria: ILike(`%${categoria}%`),
            },
        });
        console.log('Resultados encontrados:', resultados);
        return resultados;
    }

    async findAll(): Promise<Tutorial[]> {
        return await this.tutorialRepository.find();
    }
}
