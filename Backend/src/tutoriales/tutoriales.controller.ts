import { Controller, Get, Query, BadRequestException } from '@nestjs/common';
import { TutorialesService } from './tutoriales.service';
import { Tutorial } from './tutorial.entity';

@Controller('tutoriales')
export class TutorialesController {
    constructor(private readonly tutorialesService: TutorialesService) {}

    @Get()
    async findTutoriales(
        @Query('nivel') nivel?: string,
        @Query('categoria') categoria?: string,
    ): Promise<Tutorial[]> {
        if (nivel && categoria) {
            return await this.tutorialesService.findByNivelYCategoria(nivel, categoria);
        } else if (nivel) {
            return await this.tutorialesService.findByNivel(nivel);
        } else if (categoria) {
            return await this.tutorialesService.findByCategoria(categoria);
        } else {
            throw new BadRequestException('Debe proporcionar un nivel o una categoría');
        }
    }
}
