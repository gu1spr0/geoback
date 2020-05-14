import { eventoProvider } from './../providers/evento.provider';
import { EventoService } from './../services/evento/evento.service';
import { EventoController } from './../controllers/evento/evento.controller';
import { DatabaseModule } from './../database/database.module';
import { Module } from '@nestjs/common';

@Module({
    imports: [DatabaseModule],
    controllers: [EventoController],
    providers: [EventoService, ...eventoProvider],
})
export class EventoModule {}
