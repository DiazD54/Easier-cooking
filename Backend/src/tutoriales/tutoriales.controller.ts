import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { TutorialesService } from './tutoriales.service';
import { Tutorial } from './tutorial.entity';

@Controller('api/tutoriales')
export class TutorialesController {
    constructor(private readonly tutorialesService: TutorialesService) {}

    @Get()
    async findTutorialesByCategoria(@Query('categoria') categoria: string): Promise<Tutorial[]> {
        if (!categoria) {
        throw new Error('Debe proporcionar una categoría');
        }
        return await this.tutorialesService.findByCategoria(categoria);
    }

    @Post()
    async createTutorial(@Body() tutorialData: Tutorial): Promise<Tutorial> {
        return await this.tutorialesService.createTutorial(tutorialData);
    }
}
