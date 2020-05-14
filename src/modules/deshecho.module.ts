import { deshechoProvider } from './../providers/deshecho.provider';
import { DeshechoService } from './../services/deshecho/deshecho.service';
import { DeshechoController } from './../controllers/deshecho/deshecho.controller';
import { DatabaseModule } from './../database/database.module';
import { Module } from '@nestjs/common';

@Module({
    imports: [DatabaseModule],
    controllers: [DeshechoController],
    providers: [DeshechoService, ...deshechoProvider],
})
export class DeshechoModule {}
