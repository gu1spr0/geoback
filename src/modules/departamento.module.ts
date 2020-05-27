import { JwtStrategy } from './../auth/jwt.strategy';
import { departamentoProvider } from './../providers/departamento.provider';
import { DepartamentoService } from './../services/departamento/departamento.service';
import { DepartamentoController } from './../controllers/departamento/departamento.controller';
import { DatabaseModule } from './../database/database.module';
import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [DatabaseModule, AuthModule],
    controllers: [DepartamentoController],
    providers: [DepartamentoService, ...departamentoProvider],
})
export class DepartamentoModule { }
