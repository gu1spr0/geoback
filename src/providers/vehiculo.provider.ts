import { Vehiculo } from './../models/vehiculo.entity';

export const vehiculoProvider = [
    {
        provide: 'VEHICULO_REPOSITORY',
        useValue: Vehiculo,
    },
];
