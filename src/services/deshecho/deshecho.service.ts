import { Vehiculo } from './../../models/vehiculo.entity';
import { Deshecho } from './../../models/deshecho.entity';
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class DeshechoService {
    constructor(@Inject('DESHECHO_REPOSITORY') private readonly deshechoRepository: typeof Deshecho) { }

    // Lista todos /messages
    async indexAll(): Promise<Deshecho[]> {
        return await this.deshechoRepository.findAll<Deshecho>({
            // include: [
            //     { model: Vehiculo, attributes: ['placa', 'capacidad', 'unidad', 'marca', 'modelo', 'valido']},
            // ],
            attributes: ['deshechoId', 'descripcion', 'cantidad', 'fecha', 'hora'],
        });
    }
    async index(): Promise<Deshecho[]> {
        return await this.deshechoRepository.findAll<Deshecho>({
            // include: [
            //     { model: Vehiculo, attributes: ['placa', 'capacidad', 'unidad', 'marca', 'modelo', 'valido']},
            // ],
            attributes: ['deshechoId', 'descripcion', 'cantidad', 'fecha', 'hora'],
            where: {
                valido: 'AC',
            },
        });
    }
    // Creacion de registro /messages
    async store(deshecho: Deshecho): Promise<Deshecho> {
        return await this.deshechoRepository.create<Deshecho>(deshecho);
    }

    // Registro Especifico /messages/{id}
    async show(id): Promise<Deshecho> {
        return await this.deshechoRepository.findOne<Deshecho>({
            // include: [
            //     { model: Vehiculo, attributes: ['placa', 'capacidad', 'unidad', 'marca', 'modelo', 'valido']},
            // ],
            attributes: ['descripcion', 'cantidad', 'fecha', 'hora'],
            where: {
                valido: 'AC',
                deshechoId: id,
            },
        });
    }

    // Modificar

    async update(id, nuevo: Deshecho): Promise<[number, Deshecho[]]> {
        return await this.deshechoRepository.update<Deshecho>({
            descripcion: nuevo.descripcion,
            cantidad: nuevo.cantidad,
            fecha: nuevo.fecha,
            hora: nuevo.hora,
            valido: nuevo.valido,
        }, {
            where: {
                deshechoId: id,
            },
        });
    }

    // Eliminar

    async destroy(id): Promise<[number, Deshecho[]]> {
        return await this.deshechoRepository.update<Deshecho>({
            valido: 'AN',
        }, {
            where: {
                deshechoId: id,
            },
        });
    }
}
