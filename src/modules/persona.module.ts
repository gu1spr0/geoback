import { personaProvider } from './../providers/persona.provider';
import { PersonaService } from './../services/persona/persona.service';
import { PersonaController } from './../controllers/persona/persona.controller';
import { DatabaseModule } from './../database/database.module';

import { Module } from '@nestjs/common';
import { DatabaseProviders } from './../database/database.providers';
import { RoleGuard } from '../auth/guards/role.guard';
import { AuthService } from './../auth/auth.service';
import { UsuarioService } from '../services/usuario/usuario.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { usuarioProvider } from './../providers/usuario.provider';
import { AuthModule } from './../auth/auth.module';
import { JwtStrategy } from '../auth/jwt.strategy';

@Module({
    imports: [DatabaseModule],
    controllers: [PersonaController],
    providers: [PersonaService, ...personaProvider, ...DatabaseProviders],
})
export class PersonaModule { }
