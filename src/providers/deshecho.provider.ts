import { Deshecho } from './../models/deshecho.entity';

export const deshechoProvider = [
    {
        provide: 'DESHECHO_REPOSITORY',
        useValue: Deshecho,
    },
];
