import { vehiculoProvider } from './../providers/vehiculo.provider';
import { VehiculoService } from './../services/vehiculo/vehiculo.service';
import { VehiculoController } from './../controllers/vehiculo/vehiculo.controller';
import { DatabaseModule } from './../database/database.module';
import { Module } from '@nestjs/common';
@Module({
    imports: [DatabaseModule],
    controllers: [VehiculoController],
    providers: [VehiculoService, ...vehiculoProvider],
})
export class VehiculoModule { }
