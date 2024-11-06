// auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UserService,
        private readonly jwtService: JwtService,
    ) {}

    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.usersService.findByEmail(email);
        if (user && user.password === password) {
        const { password, ...result } = user;
        return result;
        }
        return null;
    }

    async login(user: any) {
        const payload: JwtPayload = { email: user.email };
        return {
        access_token: this.jwtService.sign(payload),
        };
    }
}
