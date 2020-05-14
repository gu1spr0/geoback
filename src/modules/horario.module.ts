import { horarioProvider } from './../providers/horario.provider';
import { HorarioController } from './../controllers/horario/horario.controller';
import { DatabaseModule } from './../database/database.module';
import { Module } from '@nestjs/common';
import { HorarioService } from './../services/horario/horario.service';

@Module({
    imports: [DatabaseModule],
    controllers: [HorarioController],
    providers: [HorarioService, ...horarioProvider],
})
export class HorarioModule { }
