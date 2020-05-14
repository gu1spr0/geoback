import { Vehiculo } from './../../models/vehiculo.entity';
import { Microruta } from './../../models/microruta.entity';
import { Macroruta } from './../../models/macroruta.entity';
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class MacrorutaService {
    constructor(@Inject('MACRORUTA_RESPOSITORY') private readonly macrorutaRepository: typeof Macroruta) { }

    // Lista todos /messages
    async indexAll(): Promise<Macroruta[]> {
        return await this.macrorutaRepository.findAll<Macroruta>({
            include: [
                {
                    model: Microruta,
                    attributes: [
                        'codigo',
                        'ruta',
                        'area',
                        'manzana',
                        'descripcion',
                        'valido',
                    ],
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
            ],
            attributes: ['codigo', 'ruta', 'area', 'descripcion', 'valido'],
        });
    }
    async index(): Promise<Macroruta[]> {
        return await this.macrorutaRepository.findAll<Macroruta>({
            include: [
                {
                    model: Microruta,
                    attributes: [
                        'codigo',
                        'ruta',
                        'area',
                        'manzana',
                        'descripcion',
                        'valido',
                    ],
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
            ],
            attributes: ['codigo', 'ruta', 'area', 'descripcion', 'valido'],
            where: {
                valido: 'AC',
            },
        });
    }

    // Creacion de registro /messages
    async store(macroruta: Macroruta): Promise<Macroruta> {
        return await this.macrorutaRepository.create<Macroruta>(macroruta);
    }

    // Registro Especifico /messages/{id}
    async show(id): Promise<Macroruta> {
        return await this.macrorutaRepository.findOne<Macroruta>({
            include: [
                {
                    model: Microruta,
                    attributes: [
                        'codigo',
                        'ruta',
                        'area',
                        'manzana',
                        'descripcion',
                        'valido',
                    ],
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
            ],
            attributes: ['codigo', 'ruta', 'area', 'descripcion', 'valido'],
            where: {
                macrorutaId: id,
                valido: 'AC',
            },
        });
    }

    // Modificar

    async update(id, nuevo: Macroruta): Promise<[number, Macroruta[]]> {
        return await this.macrorutaRepository.update<Macroruta>({
            codigo: nuevo.codigo,
            ruta: nuevo.ruta,
            area: nuevo.area,
            descripcion: nuevo.descripcion,
            valido: nuevo.valido,
        }, {
            where: {
                ayudanteId: id,
                valido: 'AC',
            },
        });
    }

    // Eliminar

    async destroy(id): Promise<[number, Macroruta[]]> {
        return await this.macrorutaRepository.update<Macroruta>({
            valido: 'AN',
        }, {
            where: {
                macrorutaId: id,
            },
        });
    }
}
