import { Distrito } from './../../models/distrito.entity';
import { Macroruta } from './../../models/macroruta.entity';
import { DistritoMacro } from './../../models/distrito_macro.entity';
import { Injectable, Inject } from '@nestjs/common';
import { Op } from 'sequelize/types';

@Injectable()
export class DistritoMacroService {
    constructor(@Inject('DISTRITO_MACRO_REPOSITORY') private readonly distritoMacroRepository: typeof DistritoMacro) {}

    // Lista todos /messages
    async indexAll(): Promise<DistritoMacro[]> {
        return await this.distritoMacroRepository.findAll<DistritoMacro>({
            include: [
                { model: Macroruta, attributes: ['codigo', 'ruta', 'area', 'descripcion', 'valido']},
                { model: Distrito, attributes: ['numero', 'descripcion', 'valido']},
            ],
            attributes: ['distritoMacroId'],
        });
    }
    async index(): Promise<DistritoMacro[]> {
        return await this.distritoMacroRepository.findAll<DistritoMacro>({
            include: [
                { model: Macroruta, attributes: ['codigo', 'ruta', 'area', 'descripcion', 'valido'], where: { valido: 'AC' }},
                { model: Distrito, attributes: ['numero', 'descripcion', 'valido'], where: { valido: 'AC' }},
            ],
            attributes: ['distritoMacroId'],
        });
    }
    // Creacion de registro /messages
    async store(distritoMacro: DistritoMacro): Promise<DistritoMacro> {
        return await this.distritoMacroRepository.create<DistritoMacro>(distritoMacro);
    }

    // Registro Especifico /messages/{id}
    async show(id): Promise<DistritoMacro> {
        return await this.distritoMacroRepository.findOne<DistritoMacro>({
            include: [
                { model: Macroruta, attributes: ['codigo', 'ruta', 'area', 'descripcion', 'valido'], where: { valido: 'AC' }},
                { model: Distrito, attributes: ['numero', 'descripcion', 'valido'], where: { valido: 'AC' }},
            ],
            attributes: ['distritoMacroId'],
            where: {
                distritoMacroId: id,
            },
        });
    }

    // Modificar

    // async update(id, nuevo: DistritoMacro): Promise<[number, DistritoMacro[]]> {
    //     return await this.distritoMacroRepository.update<DistritoMacro>({
    //         categoria: nuevo.categoria,
    //     }, {
    //         where: {
    //             conductorId: id,
    //         },
    //     });
    // }

    // Eliminar

    // async destroy(id): Promise<[number, Conductor[]]> {
    //     return await this.conductorRepository.update<Conductor>({
    //         valido: 'AN',
    //     }, {
    //         where: {
    //             conductorId: id,
    //         },
    //     });
    // }
}
