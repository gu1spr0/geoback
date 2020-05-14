import { visitanteProvider } from './../providers/visitante.provider';
import { VisitanteService } from './../services/visitante/visitante.service';
import { VisitanteController } from './../controllers/visitante/visitante.controller';
import { DatabaseModule } from './../database/database.module';
import { Module } from '@nestjs/common';

@Module({
    imports: [DatabaseModule],
    controllers: [VisitanteController],
    providers: [VisitanteService, ...visitanteProvider],
})
export class VisitanteModule {}
