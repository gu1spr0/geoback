import { Vehiculo } from './../../models/vehiculo.entity';
import { Visitante } from './../../models/visitante.entity';
import { VisitanteVehiculo } from './../../models/visitante_vehiculo.entity';
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class VisitanteVehiculoService {
    constructor(@Inject('VISITANTE_VEHICULO_REPOSITORY') private readonly visitanteVehiculoRepository: typeof VisitanteVehiculo) { }

    // Lista todos /messages
    async indexAll(): Promise<VisitanteVehiculo[]> {
        return await this.visitanteVehiculoRepository.findAll<VisitanteVehiculo>({
            attributes: [
                'visitanteVehiculoId',
            ],
        });
    }
    // async index(): Promise<Ayudante[]> {
    //     return await this.ayudanteRepository.findAll<Ayudante>({
    //         include: [
    //             {model: Persona, include: [{
    //                 model: Departamento, attributes: ['departamento', 'sigla'],
    //             }], attributes: ['cedula', 'nombre', 'paterno', 'materno', 'celular', 'direccion', 'email']},
    //             {model: Vehiculo, attributes: ['placa', 'capacidad', 'unidad', 'marca', 'modelo']},
    //         ],
    //         attributes: ['descripcion', 'valido'],
    //         where: {
    //             valido: 'AC',
    //         },
    //     });
    // }

    // Creacion de registro /messages
    async store(vistanteVehiculo: VisitanteVehiculo): Promise<VisitanteVehiculo> {
        return await this.visitanteVehiculoRepository.create<VisitanteVehiculo>(vistanteVehiculo);
    }

    // Registro Especifico /messages/{id}
    async show(id): Promise<VisitanteVehiculo> {
        return await this.visitanteVehiculoRepository.findOne<VisitanteVehiculo>({
            include: [
                {
                    model: Visitante,
                    attributes: [
                        'visitanteId',
                        'ubicacion',
                        'fecha',
                        'hora',
                    ],
                },
                {
                    model: Vehiculo,
                    attributes: [
                        'vehiculoId',
                        'placa',
                        'capacidad',
                        'unidad',
                        'marca',
                        'modelo',
                        'valido',
                    ],
                },
            ],
            attributes: ['visitanteVehiculoId'],
            where: {
                visitanteVehiculoId: id,
            },
        });
    }

    // Modificar

    // async update(id, nuevo: VisitanteVehiculo): Promise<[number, VisitanteVehiculo[]]> {
    //     return await this.visitanteVehiculoRepository.update<VisitanteVehiculo>({
    //         descripcion: nuevo.descripcion,
    //         valido: nuevo.valido,
    //     }, {
    //         where: {
    //             ayudanteId: id,
    //         },
    //     });
    // }

    // Eliminar

    // async destroy(id): Promise<[number, Ayudante[]]> {
    //     return await this.ayudanteRepository.update<Ayudante>({
    //         valido: 'AN',
    //     }, {
    //         where: {
    //             ayudanteId: id,
    //         },
    //     });
    // }
}
