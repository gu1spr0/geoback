import { AyudanteService } from './../services/ayudante/ayudante.service';
import { DatabaseModule } from './../database/database.module';
import { AyudanteController } from './../controllers/ayudante/ayudante.controller';
import { Module } from '@nestjs/common';
import { ayudanteProvider } from './../providers/ayudante.provider';

@Module({
    imports: [DatabaseModule],
    controllers: [AyudanteController],
    providers: [AyudanteService, ...ayudanteProvider],
})
export class AyudanteModule { }
