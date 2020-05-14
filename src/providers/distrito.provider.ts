import { Distrito } from '../models/distrito.entity';

export const distritoProvider = [
    {
        provide: 'DISTRITO_REPOSITORY',
        useValue: Distrito,
    },
];
