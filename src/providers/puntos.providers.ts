import { Puntos } from './../models/puntos.entity';

export const puntosProvider = [
    {
        provide: 'PUNTOS_REPOSITORY',
        useValue: Puntos,
    },
];
