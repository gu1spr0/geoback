import { usuarioProvider } from './../providers/usuario.provider';
import { UsuarioService } from './../services/usuario/usuario.service';
import { UsuarioController } from './../controllers/usuario/usuario.controller';
import { DatabaseModule } from './../database/database.module';
import { Module } from '@nestjs/common';
@Module({
  imports: [DatabaseModule],
  controllers: [UsuarioController],
  providers: [UsuarioService, ...usuarioProvider],
})
export class UsuarioModule { }
