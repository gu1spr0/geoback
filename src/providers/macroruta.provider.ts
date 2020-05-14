import { Macroruta } from './../models/macroruta.entity';

export const macrorutaProvider = [
    {
        provide: 'MACRORUTA_REPOSITORY',
        useValue: Macroruta,
    },
];
