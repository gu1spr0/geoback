import { AppController } from './app.controller';
import { DatabaseModule } from './database/database.module';
import { LoginModule } from './modules/login.module';
import { EventoModule } from './modules/evento.module';
import { VisitanteModule } from './modules/vistante.module';
import { VisitanteVehiculoModule } from './modules/visitante_vehiculo.module';
import { VehiculoModule } from './modules/vehiculo.module';
import { UbicacionModule } from './modules/ubicacion.module';
import { RolModule } from './modules/rol.module';
import { HorarioModule } from './modules/horario.module';
import { DistritoModule } from './modules/distrito.module';
import { DispositivoModule } from './modules/dispositivo.module';
import { DeshechoModule } from './modules/deshecho.module';
import { DepartamentoModule } from './modules/departamento.module';
import { ConductorModule } from './modules/conductor.module';
import { UsuarioModule } from './modules/usuario.module';
import { PersonaModule } from './modules/persona.module';
import { AyudanteModule } from './modules/ayudante.module';
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './auth/constants';
import { AppGateway } from './app.gateway';
import { PuntosModule } from './modules/puntos.module';
import { PuntosService } from './services/puntos/puntos.service';
import { RoleGuard } from './auth/guards/role.guard';
import { JwtStrategy } from './auth/jwt.strategy';
@Module({
  imports: [AyudanteModule,
    ConductorModule,
    DepartamentoModule,
    DeshechoModule,
    DispositivoModule,
    DistritoModule,
    EventoModule,
    HorarioModule,
    LoginModule,
    PersonaModule,
    RolModule,
    UbicacionModule,
    UsuarioModule,
    VehiculoModule,
    VisitanteVehiculoModule,
    VisitanteModule,
    DatabaseModule,
    AuthModule,
    PuntosModule,
  ],
  controllers: [],
  providers: [AppGateway],
})
export class AppModule { }
