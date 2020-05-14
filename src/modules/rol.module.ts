import { rolProvider } from './../providers/rol.provider';
import { RolService } from './../services/rol/rol.service';
import { RolController } from './../controllers/rol/rol.controller';
import { DatabaseModule } from './../database/database.module';
import { Module } from '@nestjs/common';

@Module({
    imports: [DatabaseModule],
    controllers: [RolController],
    providers: [RolService, ...rolProvider],
})
export class RolModule {}
