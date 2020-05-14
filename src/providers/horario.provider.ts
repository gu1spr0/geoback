import { Horario } from './../models/horario.entity';

export const horarioProvider = [
    {
        provide: 'HORARIO_REPOSITORY',
        useValue: Horario,
    },
];
