/*import { MacrorutaService } from './../services/macroruta/macroruta.service';
import { macrorutaProvider } from './../providers/macroruta.provider';
import { MacrorutaController } from './../controllers/macroruta/macroruta.controller';*/
import { DatabaseModule } from './../database/database.module';
import { Module } from '@nestjs/common';

@Module({
    imports: [DatabaseModule],
    /*controllers: [MacrorutaController],
    providers: [MacrorutaService, ...macrorutaProvider],*/
})
export class MacrorutaModule { }
