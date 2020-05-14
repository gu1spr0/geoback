import { conductorProvider } from './../providers/conductor.provider';
import { ConductorService } from './../services/conductor/conductor.service';
import { ConductorController } from './../controllers/conductor/conductor.controller';
import { DatabaseModule } from './../database/database.module';
import { Module } from '@nestjs/common';

@Module({
    imports: [DatabaseModule],
    controllers: [ConductorController],
    providers: [ConductorService, ...conductorProvider],
})
export class ConductorModule {}
