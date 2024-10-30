import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tutorial } from './tutorial.entity';

@Injectable()
export class TutorialesService {
    constructor(
        @InjectRepository(Tutorial)
        private tutorialRepository: Repository<Tutorial>,
    ) {}

    async findByCategoria(categoria: string): Promise<Tutorial[]> {
        return await this.tutorialRepository.find({ where: { categoria } });
    }

    async createTutorial(tutorialData: Tutorial): Promise<Tutorial> {
        const newTutorial = this.tutorialRepository.create(tutorialData);
        return await this.tutorialRepository.save(newTutorial);
    }
}
