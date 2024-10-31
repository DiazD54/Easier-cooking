// src/perfil/perfil.controller.ts
import { Controller, Get, Put, Param, Body } from '@nestjs/common';
import { PerfilService } from './perfil.service';
import { Perfil } from './perfil.entity';

@Controller('api/perfil')
export class PerfilController {
    constructor(private readonly perfilService: PerfilService) {}

    @Get()
    async findAll(): Promise<Perfil[]> {
        return await this.perfilService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<Perfil> {
        return await this.perfilService.findOne(id);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() perfilData: Partial<Perfil>): Promise<Perfil> {
        return await this.perfilService.update(id, perfilData);
    }
}
