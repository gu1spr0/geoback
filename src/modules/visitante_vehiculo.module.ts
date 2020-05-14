import { visitanteVehiculoProvider } from './../providers/vistante_vehiculo.provider';
import { VisitanteVehiculoService } from './../services/visitante-vehiculo/visitante-vehiculo.service';
import { VisitanteVehiculoController } from './../controllers/visitante-vehiculo/visitante-vehiculo.controller';
import { DatabaseModule } from './../database/database.module';
import { Module } from '@nestjs/common';

@Module({
    imports: [DatabaseModule],
    controllers: [VisitanteVehiculoController],
    providers: [VisitanteVehiculoService, ...visitanteVehiculoProvider],
})
export class VisitanteVehiculoModule {}
