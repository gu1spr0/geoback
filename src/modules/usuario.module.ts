import { usuarioProvider } from './../providers/usuario.provider';
import { UsuarioService } from './../services/usuario/usuario.service';
import { UsuarioController } from './../controllers/usuario/usuario.controller';
import { DatabaseModule } from './../database/database.module';
import { Module } from '@nestjs/common';
import { PersonaModule } from './persona.module';
import { personaProvider } from './../providers/persona.provider';
import { DatabaseProviders } from './../database/database.providers';
@Module({
  imports: [DatabaseModule],
  controllers: [UsuarioController],
  providers: [UsuarioService, ...usuarioProvider, PersonaModule, ...personaProvider, ...DatabaseProviders],
})
export class UsuarioModule { }
