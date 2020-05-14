import { microrutaProvider } from './../providers/microruta.provider';
import { MicrorutaService } from './../services/microruta/microruta.service';
import { DatabaseModule } from './../database/database.module';
import { Module } from '@nestjs/common';
import { MicrorutaController } from './../controllers/microruta/microruta.controller';

@Module({
    imports: [DatabaseModule],
    controllers: [MicrorutaController],
    providers: [MicrorutaService, ...microrutaProvider],
})
export class MicrorutaModule { }
