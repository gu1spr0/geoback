import { dispositivoProvider } from './../providers/dispositivo.provider';
import { DispositivoService } from './../services/dispositivo/dispositivo.service';
import { DispositivoController } from './../controllers/dispositivo/dispositivo.controller';
import { DatabaseModule } from './../database/database.module';
import { Module } from '@nestjs/common';

@Module({
    imports: [DatabaseModule],
    controllers: [DispositivoController],
    providers: [DispositivoService, ...dispositivoProvider],
})
export class DispositivoModule {}
