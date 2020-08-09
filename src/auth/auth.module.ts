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
import { PersonaService } from '../services/persona/persona.service';
import { personaProvider } from './../providers/persona.provider';
import { DatabaseProviders } from './../database/database.providers';
@Module({
    imports: [
        UsuarioModule,
        PassportModule.register({
            defaultStrategy: 'jwt',
            property: 'user',
            session: true,
        }),
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '2h' },
        }),
    ],
    providers: [AuthService, JwtStrategy, UsuarioService, ...usuarioProvider, PersonaService, ...personaProvider, ...DatabaseProviders],
    exports: [PassportModule, AuthService, JwtStrategy],
    controllers: [AuthController],
})
export class AuthModule { }
