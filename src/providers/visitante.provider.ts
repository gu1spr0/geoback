import { Visitante } from './../models/visitante.entity';

export const visitanteProvider = [
    {
        provide: 'VISITANTE_REPOSITORY',
        useValue: Visitante,
    },
];
