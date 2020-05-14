import { Dispositivo } from './../models/dispositivo.entity';

export const dispositivoProvider = [
    {
        provide: 'DISPOSITIVO_REPOSITORY',
        useValue: Dispositivo,
    },
];
