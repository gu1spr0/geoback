import { Persona } from './../models/persona.entity';

export const personaProvider = [
    {
        provide: 'PERSONA_REPOSITORY',
        useValue: Persona,
    },
];
