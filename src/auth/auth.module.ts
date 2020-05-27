import { Module } from '@nestjs/common';
import { UsuarioModule } from './../modules/usuario.module';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { jwtConstants } from './constants';
import { JwtModule } from '@nestjs/jwt';
import { UsuarioService } from '../services/usuario/usuario.service';
import { usuarioProvider } from './../providers/usuario.provider';
import { AuthController } from './auth.controller';
@Module({
    imports: [
        UsuarioModule,
        PassportModule.register({
            defaultStrategy: 'jwt',
            property: 'user',
            session: false,
        }),
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '300' },
        }),
    ],
    providers: [AuthService, JwtStrategy, UsuarioService, ...usuarioProvider],
    exports: [PassportModule, AuthService, JwtStrategy],
    controllers: [AuthController],
})
export class AuthModule { }
