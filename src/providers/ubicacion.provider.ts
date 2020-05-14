import { Ubicacion } from './../models/ubicacion.entity';

export const ubicacionProvider = [
    {
        provide: 'UBICACION_REPOSITORY',
        useValue: Ubicacion,
    },
];
