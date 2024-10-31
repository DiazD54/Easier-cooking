// src/perfil/perfil.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Perfil } from './perfil.entity';

@Injectable()
export class PerfilService {
    constructor(
        @InjectRepository(Perfil)
        private perfilRepository: Repository<Perfil>,
    ) {}

    async findAll(): Promise<Perfil[]> {
        return await this.perfilRepository.find();
    }

    async findOne(id: number): Promise<Perfil> {
        return await this.perfilRepository.findOneBy({ id });
    }

    async update(id: number, perfilData: Partial<Perfil>): Promise<Perfil> {
        await this.perfilRepository.update(id, perfilData);
        return this.findOne(id);
    }
}
