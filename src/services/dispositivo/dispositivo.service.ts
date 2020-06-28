import { Vehiculo } from './../../models/vehiculo.entity';
import { Ubicacion } from './../../models/ubicacion.entity';
import { Dispositivo } from './../../models/dispositivo.entity';
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class DispositivoService {
    constructor(@Inject('DISPOSITIVO_REPOSITORY') private readonly dispositivoRepository: typeof Dispositivo) { }

    // Lista todos /messages
    async indexAll(): Promise<Dispositivo[]> {
        return await this.dispositivoRepository.findAll<Dispositivo>({
            include: [
                { model: Ubicacion, attributes: ['ubicacionId', 'fecha', 'hora', 'linea'] },
                { model: Vehiculo, attributes: ['vehiculoId', 'placa', 'capacidad', 'unidad', 'marca', 'modelo', 'valido'] },
            ],
            attributes: ['dispositivoId', 'nombre', 'descripcion', 'marca', 'modelo', 'sub', 'pub', 'ip', 'mac', 'valido'],
        });
    }
    async index(): Promise<Dispositivo[]> {
        return await this.dispositivoRepository.findAll<Dispositivo>({
            include: [
                { model: Ubicacion, attributes: ['ubicacionId', 'fecha', 'hora', 'linea'] },
                { model: Vehiculo, attributes: ['vehiculoId', 'placa', 'capacidad', 'unidad', 'marca', 'modelo', 'valido'] },
            ],
            attributes: ['dispositivoId', 'nombre', 'descripcion', 'marca', 'modelo', 'sub', 'pub', 'ip', 'mac', 'valido'],
            where: {
                valido: 'AC',
            },
        });
    }

    // Creacion de registro /messages
    async store(dispositivo: Dispositivo): Promise<Dispositivo> {
        return await this.dispositivoRepository.create<Dispositivo>(dispositivo);
    }

    // Registro Especifico /messages/{id}
    async show(id): Promise<Dispositivo> {
        return await this.dispositivoRepository.findOne<Dispositivo>({
            include: [
                { model: Ubicacion, attributes: ['ubicacionId', 'fecha', 'hora', 'linea'] },
                { model: Vehiculo, attributes: ['vehiculoId', 'placa', 'capacidad', 'unidad', 'marca', 'modelo', 'valido'] },
            ],
            attributes: ['dispositivoId', 'nombre', 'descripcion', 'marca', 'modelo', 'sub', 'pub', 'ip', 'mac', 'valido'],
            where: {
                valido: 'AC',
                dispositivoId: id,
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
            mac: nuevo.mac,
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
