import { distritoMacroProvider } from './../providers/distrito_macro.provider';
import { DistritoMacroService } from './../services/distrito-macro/distrito-macro.service';
import { DistritoMacroController } from './../controllers/distrito-macro/distrito-macro.controller';
import { DatabaseModule } from './../database/database.module';
import { Module } from '@nestjs/common';

@Module({
    imports: [DatabaseModule],
    controllers: [DistritoMacroController],
    providers: [DistritoMacroService, ...distritoMacroProvider],
})
export class DistritoMacroModule {}
