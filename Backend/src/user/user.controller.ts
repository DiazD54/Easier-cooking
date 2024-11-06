import { Controller, Get, Post, Body, Param, Delete, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @UseGuards(AuthGuard('jwt'))
    @Get('profile')
    getProfile() {
        return { message: 'This is a protected route' };
    }

    @Get()
    async findAll(): Promise<User[]> {
        return await this.userService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<User | undefined> {
        return await this.userService.findOneById(id);
    }

    @Post()
    async create(@Body() createUserDto: CreateUserDto): Promise<User> {
        return await this.userService.create(createUserDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<void> {
        return await this.userService.delete(id);
    }
}
