import { Conductor } from './../models/conductor.entity';

export const conductorProvider = [
    {
        provide: 'CONDUCTOR_REPOSITORY',
        useValue: Conductor,
    },
];
