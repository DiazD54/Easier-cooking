import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}

    async findAll(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async findOneByUsername(username: string): Promise<User | undefined> {
        return await this.userRepository.findOne({ where: { username } });
    }

    async findByEmail(email: string): Promise<User | null> {
        try {
            const user = await this.userRepository.findOne({ where: { email } });
            return user || null;
        } catch (error) {
            throw new Error('Error al buscar el usuario por email');
        }
    }

    async findOneById(id: number): Promise<User | undefined> {
        return await this.userRepository.findOne({ where: { id } });
    }

    async create(createUserDto: CreateUserDto): Promise<User> {
        const { username, password, email } = createUserDto;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = this.userRepository.create({
        username,
        password: hashedPassword,
        email,
        });
        return await this.userRepository.save(newUser);
    }

    async delete(id: number): Promise<void> {
        await this.userRepository.delete(id);
    }
}
