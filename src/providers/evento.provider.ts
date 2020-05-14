import { Evento } from './../models/evento.entity';

export const eventoProvider = [
    {
        provide: 'EVENTO_REPOSITORY',
        useValue: Evento,
    },
];
