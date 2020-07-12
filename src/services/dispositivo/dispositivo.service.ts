import { Vehiculo } from './../../models/vehiculo.entity';
import { Ubicacion } from './../../models/ubicacion.entity';
import { Dispositivo } from './../../models/dispositivo.entity';
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class DispositivoService {
    constructor(
        @Inject('DISPOSITIVO_REPOSITORY') private readonly dispositivoRepository: typeof Dispositivo,
        @Inject('SEQUELIZE') private readonly sequelize) { }

    // Lista todos /messages
    async indexAll(): Promise<Dispositivo[]> {
        return await this.dispositivoRepository.findAll<Dispositivo>({
            include: [
                { model: Ubicacion, attributes: ['ubicacionId', 'fecha', 'hora', 'linea'] },
                { model: Vehiculo, attributes: ['vehiculoId', 'placa', 'capacidad', 'unidad', 'marca', 'modelo', 'valido'] },
            ],
            attributes: ['dispositivoId', 'nombre', 'descripcion', 'modelo', 'sub', 'pub', 'ip', 'valido'],
        });
    }
    async index(): Promise<Dispositivo[]> {
        return await this.dispositivoRepository.findAll<Dispositivo>({
            include: [
                { model: Ubicacion, attributes: ['ubicacionId', 'fecha', 'hora', 'linea'] },
                { model: Vehiculo, attributes: ['vehiculoId', 'placa', 'capacidad', 'unidad', 'marca', 'modelo', 'valido'] },
            ],
            attributes: ['dispositivoId', 'nombre', 'descripcion', 'marca', 'modelo', 'sub', 'pub', 'ip', 'valido'],
            where: {
                valido: 'AC',
            },
        });
    }

    // Creacion de registro /messages
    async store(dispositivo: Dispositivo): Promise<Dispositivo> {
        const t = await this.sequelize.transaction();
        try {
            const d = await this.dispositivoRepository.create<Dispositivo>(dispositivo, { transaction: t });
            await t.commit();
            return d;

        } catch (error) {
            await t.rollback();
            throw new Error();
        }
    }

    // Registro Especifico /messages/{id}
    async show(id): Promise<Dispositivo> {
        return await this.dispositivoRepository.findOne<Dispositivo>({
            include: [
                { model: Ubicacion, attributes: ['ubicacionId', 'fecha', 'hora', 'linea'] },
                { model: Vehiculo, attributes: ['vehiculoId', 'placa', 'capacidad', 'unidad', 'marca', 'modelo', 'valido'] },
            ],
            attributes: ['dispositivoId', 'nombre', 'descripcion', 'marca', 'modelo', 'sub', 'pub', 'ip', 'valido'],
            where: {
                valido: 'AC',
                dispositivoId: id,
            },
        });
    }

    //Buscar por identificador de dispositivo
    async findName(id): Promise<Dispositivo> {
        return await this.dispositivoRepository.findOne<Dispositivo>({
            include: [
                { model: Ubicacion, attributes: ['ubicacionId', 'fecha', 'hora', 'linea'] },
                { model: Vehiculo, attributes: ['vehiculoId', 'placa', 'capacidad', 'unidad', 'marca', 'modelo', 'valido'] },
            ],
            attributes: ['dispositivoId', 'nombre', 'descripcion', 'marca', 'modelo', 'sub', 'pub', 'ip', 'valido'],
            where: {
                valido: 'AC',
                nombre: id,
            },
        });
    }

    // Modificar

    async update(id, nuevo: Dispositivo): Promise<[number, Dispositivo[]]> {
        return await this.dispositivoRepository.update<Dispositivo>({
            nombre: nuevo.nombre,
            descripcion: nuevo.descripcion,
            marca: nuevo.marca,
            modelo: nuevo.modelo,
            sub: nuevo.sub,
            pub: nuevo.pub,
            ip: nuevo.ip,
            valido: nuevo.valido,
        }, {
            where: {
                dispositivoId: id,
            },
        });
    }

    // Eliminar

    async destroy(id): Promise<[number, Dispositivo[]]> {
        return await this.dispositivoRepository.update<Dispositivo>({
            valido: 'AN',
        }, {
            where: {
                dispositivoId: id,
            },
        });
    }
}
