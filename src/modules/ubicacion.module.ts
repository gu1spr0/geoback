import { ubicacionProvider } from './../providers/ubicacion.provider';
import { UbicacionService } from './../services/ubicacion/ubicacion.service';
import { UbicacionController } from './../controllers/ubicacion/ubicacion.controller';
import { DatabaseModule } from './../database/database.module';
import { Module } from '@nestjs/common';

@Module({
    imports: [DatabaseModule],
    controllers: [UbicacionController],
    providers: [UbicacionService, ...ubicacionProvider],
})
export class UbicacionModule {}
