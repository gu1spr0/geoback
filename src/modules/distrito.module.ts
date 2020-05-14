import { distritoProvider } from './../providers/distrito.provider';
import { DistritoService } from './../services/distrito/distrito.service';
import { DistritoController } from './../controllers/distrito/distrito.controller';
import { DatabaseModule } from './../database/database.module';
import { Module } from '@nestjs/common';

@Module({
    imports: [DatabaseModule],
    controllers: [DistritoController],
    providers: [DistritoService, ...distritoProvider],
})
export class DistritoModule {}
