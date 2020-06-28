import { Distrito } from './../../models/distrito.entity';
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class DistritoService {
    constructor(@Inject('DISTRITO_REPOSITORY') private readonly distritoRepository: typeof Distrito) { }

    // Lista todos /messages
    async indexAll(): Promise<Distrito[]> {
        return await this.distritoRepository.findAll<Distrito>({
            attributes: ['distritoId', 'numero', 'descripcion', 'valido'],
        });
    }
    async index(): Promise<Distrito[]> {
        return await this.distritoRepository.findAll<Distrito>({
            attributes: ['distritoId', 'numero', 'descripcion', 'valido'],
            where: {
                valido: 'AC',
            },
        });
    }
    // Creacion de registro /messages
    async store(distrito: Distrito): Promise<Distrito> {
        return await this.distritoRepository.create<Distrito>(distrito);
    }

    // Registro Especifico /messages/{id}
    async show(id): Promise<Distrito> {
        return await this.distritoRepository.findOne<Distrito>({
            attributes: ['distritoId', 'numero', 'descripcion', 'valido'],
            where: {
                distritoId: id,
                valido: 'AC',
            },
        });
    }

    // Modificar

    async update(id, nuevo: Distrito): Promise<[number, Distrito[]]> {
        return await this.distritoRepository.update<Distrito>({
            numero: nuevo.numero,
            descripcion: nuevo.descripcion,
        }, {
            where: {
                distritoId: id,
                valido: 'AC',
            },
        });
    }

    // Eliminar

    async destroy(id): Promise<[number, Distrito[]]> {
        return await this.distritoRepository.update<Distrito>({
            valido: 'AN',
        }, {
            where: {
                distritoId: id,
                valido: 'AC',
            },
        });
    }
}
