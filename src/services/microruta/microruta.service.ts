import { Horario } from './../../models/horario.entity';
import { Macroruta } from './../../models/macroruta.entity';
import { Microruta } from './../../models/microruta.entity';
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class MicrorutaService {
    constructor(@Inject('MICRORUTA_REPOSITORY') private readonly microrutaRepository: typeof Microruta) { }

    // Lista todos /messages
    async indexAll(): Promise<Microruta[]> {
        return await this.microrutaRepository.findAll<Microruta>({
            include: [
                {
                    model: Macroruta,
                    attributes: [
                        'codigo',
                        'ruta',
                        'area',
                        'descripcion',
                        'valido',
                    ],
                    include: [
                        {
                            model: Horario,
                            attributes: [
                                'dia',
                                'hora',
                                'valido',
                            ],

                        },
                    ],
                },
            ],
            attributes: [
                'codigo',
                'ruta',
                'area',
                'manzanas',
                'descripcion',
                'valido',
            ],
        });
    }
    async index(): Promise<Microruta[]> {
        return await this.microrutaRepository.findAll<Microruta>({
            include: [
                {
                    model: Macroruta,
                    attributes: [
                        'codigo',
                        'ruta',
                        'area',
                        'descripcion',
                        'valido',
                    ],
                    include: [
                        {
                            model: Horario,
                            attributes: [
                                'dia',
                                'hora',
                                'valido',
                            ],

                        },
                    ],
                },
            ],
            attributes: [
                'codigo',
                'ruta',
                'area',
                'manzanas',
                'descripcion',
                'valido',
            ],
            where: {
                valido: 'AC',
            },
        });
    }

    // Creacion de registro /messages
    async store(microruta: Microruta): Promise<Microruta> {
        return await this.microrutaRepository.create<Microruta>(microruta);
    }

    // Registro Especifico /messages/{id}
    async show(id): Promise<Microruta> {
        return await this.microrutaRepository.findOne<Microruta>({
            include: [
                {
                    model: Macroruta,
                    attributes: [
                        'codigo',
                        'ruta',
                        'area',
                        'descripcion',
                        'valido',
                    ],
                    include: [
                        {
                            model: Horario,
                            attributes: [
                                'dia',
                                'hora',
                                'valido',
                            ],

                        },
                    ],
                },
            ],
            attributes: [
                'codigo',
                'ruta',
                'area',
                'manzanas',
                'descripcion',
                'valido',
            ],
            where: {
                microrutaId: id,
                valido: 'AC',
            },
        });
    }

    // Modificar

    async update(id, nuevo: Microruta): Promise<[number, Microruta[]]> {
        return await this.microrutaRepository.update<Microruta>({
            codigo: nuevo.codigo,
            ruta: nuevo.ruta,
            area: nuevo.area,
            manzanas: nuevo.manzanas,
            descripcion: nuevo.descripcion,
            valido: nuevo.valido,
        }, {
            where: {
                microrutaId: id,
                valido: 'AC',
            },
        });
    }

    // Eliminar

    async destroy(id): Promise<[number, Microruta[]]> {
        return await this.microrutaRepository.update<Microruta>({
            valido: 'AN',
        }, {
            where: {
                microrutaId: id,
                valido: 'AC',
            },
        });
    }
}
