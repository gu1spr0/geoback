import { JwtStrategy } from './../auth/jwt.strategy';
import { LocalStrategy } from './../auth/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { usuarioProvider } from './../providers/usuario.provider';
import { UsuarioService } from './../services/usuario/usuario.service';
import { UsuarioController } from './../controllers/usuario/usuario.controller';
import { DatabaseModule } from './../database/database.module';
import { Module } from '@nestjs/common';
import { jwtConstants } from './../auth/constants';
@Module({
  imports: [
    DatabaseModule,
    PassportModule.register({
      defaultStrategy: 'jwt',
      sesion: 'false',
    }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '7d' },
    }),
  ],
  controllers: [UsuarioController],
  providers: [UsuarioService, ...usuarioProvider, LocalStrategy, JwtStrategy],
  exports: [PassportModule, LocalStrategy, UsuarioService],
})
export class UsuarioModule { }
