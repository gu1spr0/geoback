import { departamentoProvider } from './../providers/departamento.provider';
import { DepartamentoService } from './../services/departamento/departamento.service';
import { DepartamentoController } from './../controllers/departamento/departamento.controller';
import { DatabaseModule } from './../database/database.module';
import { Module } from '@nestjs/common';

@Module({
    imports: [DatabaseModule],
    controllers: [DepartamentoController],
    providers: [DepartamentoService, ...departamentoProvider],
})
export class DepartamentoModule {}
