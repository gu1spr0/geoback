import { Microruta } from './../models/microruta.entity';

export const microrutaProvider = [
    {
        provide: 'MICRORUTA_REPOSITORY',
        useValue: Microruta,
    },
];
