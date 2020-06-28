import { Macroruta } from './../../models/macroruta.entity';
import { Microruta } from './../../models/microruta.entity';
import { Horario } from './../../models/horario.entity';
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class HorarioService {
    constructor(@Inject('HORARIO_REPOSITORY') private readonly horarioRepository: typeof Horario) { }

    // Lista todos /messages HORARIO, MICRORUTA, MACRORUTA
    async indexAll(): Promise<Horario[]> {
        return await this.horarioRepository.findAll<Horario>({
            include: [
                {
                    model: Microruta, include: [{
                        model: Macroruta,
                        attributes: [
                            'macrorutaId',
                            'codigo',
                            'ruta',
                            'area',
                            'descripcion',
                            'valido',
                        ],
                    }], attributes: [
                        'microrutaId',
                        'codigo',
                        'ruta',
                        'area',
                        'manzanas',
                        'descripcion',
                        'valido',
                    ],
                },
            ],
            attributes: ['horarioId', 'dia', 'hora', 'valido'],
        });
    }
    async index(): Promise<Horario[]> {
        return await this.horarioRepository.findAll<Horario>({
            include: [
                {
                    model: Microruta, include: [{
                        model: Macroruta,
                        attributes: [
                            'macrorutaId',
                            'codigo',
                            'ruta',
                            'area',
                            'descripcion',
                            'valido',
                        ],
                    }], attributes: [
                        'microrutaId',
                        'codigo',
                        'ruta',
                        'area',
                        'manzanas',
                        'descripcion',
                        'valido',
                    ],
                },
            ],
            attributes: ['horarioId', 'dia', 'hora', 'valido'],
            where: {
                valido: 'AC',
            },
        });
    }

    // Creacion de registro /messages
    async store(horario: Horario): Promise<Horario> {
        return await this.horarioRepository.create<Horario>(horario);
    }

    // Registro Especifico /messages/{id}
    async show(id): Promise<Horario> {
        return await this.horarioRepository.findOne<Horario>({
            include: [
                {
                    model: Microruta, include: [{
                        model: Macroruta,
                        attributes: [
                            'macrorutaId',
                            'codigo',
                            'ruta',
                            'area',
                            'descripcion',
                            'valido',
                        ],
                    }], attributes: [
                        'microrutaId',
                        'codigo',
                        'ruta',
                        'area',
                        'manzanas',
                        'descripcion',
                        'valido',
                    ],
                },
            ],
            attributes: ['horarioId', 'dia', 'hora', 'valido'],
            where: {
                horarioId: id,
                valido: 'AC',
            },
        });
    }

    // Modificar

    async update(id, nuevo: Horario): Promise<[number, Horario[]]> {
        return await this.horarioRepository.update<Horario>({
            dia: nuevo.dia,
            hora: nuevo.hora,
        }, {
            where: {
                horarioId: id,
                valido: 'AC',
            },
        });
    }

    // Eliminar

    async destroy(id): Promise<[number, Horario[]]> {
        return await this.horarioRepository.update<Horario>({
            valido: 'AN',
        }, {
            where: {
                horarioId: id,
                valido: 'AC',
            },
        });
    }
}
