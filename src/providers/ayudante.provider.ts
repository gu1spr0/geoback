import { Ayudante } from './../models/ayudante.entity';

export const ayudanteProvider = [
    {
        provide: 'AYUDANTE_REPOSITORY',
        useValue: Ayudante,
    },
];
