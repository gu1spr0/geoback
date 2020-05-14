import { Departamento } from './../../models/departamento.entity';
import { Vehiculo } from './../../models/vehiculo.entity';
import { Persona } from './../../models/persona.entity';
import { Conductor } from './../../models/conductor.entity';
import { Evento } from './../../models/evento.entity';
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class EventoService {
    constructor(@Inject('EVENTO_REPOSITORY') private readonly eventoRepository: typeof Evento) { }

    // Lista todos /messages
    async indexAll(): Promise<Evento[]> {
        return await this.eventoRepository.findAll<Evento>({
            include: [
                { model: Conductor, attributes: ['categoria'], include: [
                    {
                        model: Persona,
                        attributes: [
                            'cedula',
                            'nombre',
                            'paterno',
                            'materno',
                            'celular',
                            'email',
                            'direccion',
                            'valido',
                        ],
                        include: [{
                            model: Departamento,
                            attributes: [
                                'departamento',
                                'sigla',
                            ],
                        }],
                    },
                    {
                        model: Vehiculo,
                        attributes: [
                            'placa',
                            'capacidad',
                            'unidad',
                            'marca',
                            'modelo',
                            'valido',
                        ],
                    },
                ]},
            ],
            attributes: ['evento', 'fecha', 'hora', 'valido'],
        });
    }
    async index(): Promise<Evento[]> {
        return await this.eventoRepository.findAll<Evento>({
            include: [
                { model: Conductor, attributes: ['categoria'], include: [
                    {
                        model: Persona,
                        attributes: [
                            'cedula',
                            'nombre',
                            'paterno',
                            'materno',
                            'celular',
                            'email',
                            'direccion',
                            'valido',
                        ],
                        include: [{
                            model: Departamento,
                            attributes: [
                                'departamento',
                                'sigla',
                            ],
                        }],
                    },
                    {
                        model: Vehiculo,
                        attributes: [
                            'placa',
                            'capacidad',
                            'unidad',
                            'marca',
                            'modelo',
                            'valido',
                        ],
                    },
                ]},
            ],
            attributes: ['evento', 'fecha', 'hora', 'valido'],
            where: {
                valido: 'AC',
            },
        });
    }

    // Creacion de registro /messages
    async store(evento: Evento): Promise<Evento> {
        return await this.eventoRepository.create<Evento>(evento);
    }

    // Registro Especifico /messages/{id}
    async show(id): Promise<Evento> {
        return await this.eventoRepository.findOne<Evento>({
            include: [
                { model: Conductor, attributes: ['categoria'], include: [
                    {
                        model: Persona,
                        attributes: [
                            'cedula',
                            'nombre',
                            'paterno',
                            'materno',
                            'celular',
                            'email',
                            'direccion',
                            'valido',
                        ],
                        include: [{
                            model: Departamento,
                            attributes: [
                                'departamento',
                                'sigla',
                            ],
                        }],
                    },
                    {
                        model: Vehiculo,
                        attributes: [
                            'placa',
                            'capacidad',
                            'unidad',
                            'marca',
                            'modelo',
                            'valido',
                        ],
                    },
                ]},
            ],
            attributes: ['evento', 'fecha', 'hora', 'valido'],
            where: {
                eventoId: id,
                valido: 'AC',
            },
        });
    }

    // Modificar

    async update(id, nuevo: Evento): Promise<[number, Evento[]]> {
        return await this.eventoRepository.update<Evento>({
            evento: nuevo.evento,
            fecha: nuevo.fecha,
            hora: nuevo.hora,
            valido: nuevo.valido,
        }, {
            where: {
                eventoId: id,
                valido: 'AC',
            },
        });
    }

    // Eliminar

    async destroy(id): Promise<[number, Evento[]]> {
        return await this.eventoRepository.update<Evento>({
            valido: 'AN',
        }, {
            where: {
                eventoId: id,
                valido: 'AC',
            },
        });
    }
}
