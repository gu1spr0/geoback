import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { PuntosController } from '../controllers/puntos/puntos.controller';
import { PuntosService } from '../services/puntos/puntos.service';
import { puntosProvider } from '../providers/puntos.providers';
import { DatabaseProviders } from '../database/database.providers';

@Module({
    imports: [DatabaseModule],
    controllers: [PuntosController],
    providers: [PuntosService, ...puntosProvider, ...DatabaseProviders],
})
export class PuntosModule { }
