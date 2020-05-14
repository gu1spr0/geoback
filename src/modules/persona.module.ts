import { personaProvider } from './../providers/persona.provider';
import { PersonaService } from './../services/persona/persona.service';
import { PersonaController } from './../controllers/persona/persona.controller';
import { DatabaseModule } from './../database/database.module';

import { Module } from '@nestjs/common';

@Module({
    imports: [DatabaseModule],
    controllers: [PersonaController],
    providers: [PersonaService, ...personaProvider],
})
export class PersonaModule {}
