// auth.module.ts
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { JwtStrategy } from './jwt.strategy'; // Create this strategy later
import { AuthController } from './auth.controller';

@Module({
    imports: [
        UserModule,
        PassportModule,
        JwtModule.register({
        secret: process.env.JWT_SECRET || 'your-secret-key', // Store the secret in an env variable
        signOptions: { expiresIn: '1h' },
        }),
    ],
    providers: [AuthService, JwtStrategy],
    controllers: [AuthController],
    exports: [AuthService],
})
export class AuthModule {}
