import { Ayudante } from './../../models/ayudante.entity';
import { Deshecho } from './../../models/deshecho.entity';
import { Departamento } from './../../models/departamento.entity';
import { Persona } from './../../models/persona.entity';
import { Conductor } from './../../models/conductor.entity';
import { Macroruta } from './../../models/macroruta.entity';
import { Dispositivo } from './../../models/dispositivo.entity';
import { Vehiculo } from './../../models/vehiculo.entity';
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class VehiculoService {
    constructor(@Inject('VEHICULO_REPOSITORY') private readonly vehiculoRepository: typeof Vehiculo) { }

    // Lista todos /messages
    async indexAll(): Promise<Vehiculo[]> {
        return await this.vehiculoRepository.findAll<Vehiculo>({
            include: [
                {
                    model: Dispositivo,
                    attributes: [
                        'dispositivoId',
                        'nombre',
                        'descripcion',
                        'marca',
                        'modelo',
                        'sub',
                        'pub',
                        'ip',
                        'mac',
                        'valido',
                    ],
                },
                {
                    model: Macroruta,
                    attributes: [
                        'macrorutaId',
                        'codigo',
                        'ruta',
                        'area',
                        'descripcion',
                        'valido',
                    ],

                },
                {
                    model: Conductor,
                    attributes: [
                        'conductorId',
                        'categoria',
                    ],
                    include: [
                        {
                            model: Persona,
                            attributes: [
                                'personaId',
                                'nombre',
                                'paterno',
                                'materno',
                                'cedula',
                            ],
                            include: [
                                {
                                    model: Departamento,
                                    attributes: [
                                        'departamentoId',
                                        'departamento',
                                        'sigla',
                                    ],
                                }

                            ],
                        },
                    ],
                },
                {
                    model: Ayudante,
                    attributes: [
                        'ayudanteId',
                        'descripcion',
                        'valido',
                    ],
                    include: [
                        {
                            model: Persona,
                            attributes: [
                                'personaId',
                                'nombre',
                                'paterno',
                                'materno',
                                'cedula',
                            ],
                            include: [
                                {
                                    model: Departamento,
                                    attributes: [
                                        'departamentoId',
                                        'departamento',
                                        'sigla',
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    model: Deshecho,
                    attributes: [
                        'deshechoId',
                        'descripcion',
                        'cantidad',
                        'fecha',
                        'hora',
                        'valido',
                    ],
                },
            ],
            attributes: [
                'vehiculoId',
                'placa',
                'capacidad',
                'unidad',
                'marca',
                'modelo',
                'valido',
            ],
        });
    }
    async index(): Promise<Vehiculo[]> {
        return await this.vehiculoRepository.findAll<Vehiculo>({
            include: [
                {
                    model: Dispositivo,
                    attributes: [
                        'dispositivoId',
                        'nombre',
                        'descripcion',
                        'marca',
                        'modelo',
                        'sub',
                        'pub',
                        'ip',
                        'mac',
                        'valido',
                    ],
                },
                {
                    model: Macroruta,
                    attributes: [
                        'macrorutaId',
                        'codigo',
                        'ruta',
                        'area',
                        'descripcion',
                        'valido',
                    ],

                },
                {
                    model: Conductor,
                    attributes: [
                        'conductorId',
                        'categoria',
                    ],
                    include: [
                        {
                            model: Persona,
                            attributes: [
                                'personaId',
                                'nombre',
                                'paterno',
                                'materno',
                                'cedula',
                            ],
                            include: [
                                {
                                    model: Departamento,
                                    attributes: [
                                        'departamentoId',
                                        'departamento',
                                        'sigla',
                                    ],
                                },
                            ],

                        },
                    ],

                },
                {
                    model: Ayudante,
                    attributes: [
                        'ayudanteId',
                        'descripcion',
                        'valido',
                    ],
                    include: [
                        {
                            model: Persona,
                            attributes: [
                                'personaId',
                                'nombre',
                                'paterno',
                                'materno',
                                'cedula',
                            ],
                            include: [
                                {
                                    model: Departamento,
                                    attributes: [
                                        'departamentoId',
                                        'departamento',
                                        'sigla',
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    model: Deshecho,
                    attributes: [
                        'deshechoId',
                        'descripcion',
                        'cantidad',
                        'fecha',
                        'hora',
                        'valido',
                    ],
                },
            ],
            attributes: [
                'vehiculoId',
                'placa',
                'capacidad',
                'unidad',
                'marca',
                'modelo',
                'valido',
            ],
            where: {
                valido: 'AC',
            },
        });
    }

    // Creacion de registro /messages
    async store(vehiculo: Vehiculo): Promise<Vehiculo> {
        return await this.vehiculoRepository.create<Vehiculo>(vehiculo);
    }

    // Registro Especifico /messages/{id}
    async show(id): Promise<Vehiculo> {
        return await this.vehiculoRepository.findOne<Vehiculo>({
            include: [
                {
                    model: Dispositivo,
                    attributes: [
                        'dispositivoId',
                        'nombre',
                        'descripcion',
                        'marca',
                        'modelo',
                        'sub',
                        'pub',
                        'ip',
                        'mac',
                        'valido',
                    ],
                },
                {
                    model: Macroruta,
                    attributes: [
                        'macrorutaId',
                        'codigo',
                        'ruta',
                        'area',
                        'descripcion',
                        'valido',
                    ],

                },
                {
                    model: Conductor,
                    attributes: [
                        'conductorId',
                        'categoria',
                    ],
                    include: [
                        {
                            model: Persona,
                            attributes: [
                                'personaId',
                                'nombre',
                                'paterno',
                                'materno',
                                'cedula',
                            ],
                            include: [
                                {
                                    model: Departamento,
                                    attributes: [
                                        'departamentoId',
                                        'departamento',
                                        'sigla',
                                    ],
                                },
                            ],

                        },
                    ],

                },
                {
                    model: Ayudante,
                    attributes: [
                        'ayudanteId',
                        'descripcion',
                        'valido',
                    ],
                    include: [
                        {
                            model: Persona,
                            attributes: [
                                'personaId',
                                'nombre',
                                'paterno',
                                'materno',
                                'cedula',
                            ],
                            include: [
                                {
                                    model: Departamento,
                                    attributes: [
                                        'departamentoId',
                                        'departamento',
                                        'sigla',
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    model: Deshecho,
                    attributes: [
                        'deshechoId',
                        'descripcion',
                        'cantidad',
                        'fecha',
                        'hora',
                        'valido',
                    ],
                },
            ],
            attributes: [
                'vehiculoId',
                'placa',
                'capacidad',
                'unidad',
                'marca',
                'modelo',
                'valido',
            ],
            where: {
                vehiculoId: id,
                valido: 'AC',
            },
        });
    }

    // Modificar

    async update(id, nuevo: Vehiculo): Promise<[number, Vehiculo[]]> {
        return await this.vehiculoRepository.update<Vehiculo>({
            placa: nuevo.placa,
            capacidad: nuevo.capacidad,
            unidad: nuevo.unidad,
            marca: nuevo.marca,
            modelo: nuevo.modelo,
            valido: nuevo.valido,
        }, {
            where: {
                vehiculoId: id,
                valido: 'AC',
            },
        });
    }

    // Eliminar

    async destroy(id): Promise<[number, Vehiculo[]]> {
        return await this.vehiculoRepository.update<Vehiculo>({
            valido: 'AN',
        }, {
            where: {
                vehiculoId: id,
                valido: 'AC',
            },
        });
    }
}
