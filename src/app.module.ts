import { AppController } from './app.controller';
import { DatabaseModule } from './database/database.module';
import { LoginModule } from './modules/login.module';
import { EventoModule } from './modules/evento.module';
import { VisitanteModule } from './modules/vistante.module';
import { VisitanteVehiculoModule } from './modules/visitante_vehiculo.module';
import { VehiculoModule } from './modules/vehiculo.module';
import { UbicacionModule } from './modules/ubicacion.module';
import { RolModule } from './modules/rol.module';
import { MicrorutaModule } from './modules/microruta.module';
import { MacrorutaModule } from './modules/macroruta.module';
import { HorarioModule } from './modules/horario.module';
import { DistritoModule } from './modules/distrito.module';
import { DistritoMacroModule } from './modules/distrito_macro.module';
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
@Module({
  imports: [AyudanteModule,
    ConductorModule,
    DepartamentoModule,
    DeshechoModule,
    DispositivoModule,
    DistritoMacroModule,
    DistritoModule,
    EventoModule,
    HorarioModule,
    LoginModule,
    MacrorutaModule,
    MicrorutaModule,
    PersonaModule,
    RolModule,
    UbicacionModule,
    UsuarioModule,
    VehiculoModule,
    VisitanteVehiculoModule,
    VisitanteModule,
    DatabaseModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
