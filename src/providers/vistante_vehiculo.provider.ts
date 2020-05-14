import { VisitanteVehiculo } from './../models/visitante_vehiculo.entity';

export const visitanteVehiculoProvider = [
    {
        provide: 'VISITANTE_VEHICULO_REPOSITORY',
        useValue: VisitanteVehiculo,
    },
];
