import { Rol } from './../../models/rol.entity';
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class RolService {
    constructor(@Inject('ROL_REPOSITORY') private readonly rolRepository: typeof Rol) { }

    // Lista todos /messages
    async indexAll(): Promise<Rol[]> {
        return await this.rolRepository.findAll<Rol>({
            attributes: ['nombre', 'descripcion', 'observacion', 'valido'],
        });
    }
    async index(): Promise<Rol[]> {
        return await this.rolRepository.findAll<Rol>({
            attributes: ['nombre', 'descripcion', 'observacion', 'valido'],
            where: {
                valido: 'AC',
            },
        });
    }

    // Creacion de registro /messages
    async store(rol: Rol): Promise<Rol> {
        return await this.rolRepository.create<Rol>(rol);
    }

    // Registro Especifico /messages/{id}
    async show(id): Promise<Rol> {
        return await this.rolRepository.findOne<Rol>({
            attributes: ['nombre', 'descripcion', 'observacion', 'valido'],
            where: {
                rolId: id,
                valido: 'AC',
            },
        });
    }

    // Modificar

    async update(id, nuevo: Rol): Promise<[number, Rol[]]> {
        return await this.rolRepository.update<Rol>({
            nombre: nuevo.nombre,
            descripcion: nuevo.descripcion,
            observacion: nuevo.observacion,
            valido: nuevo.valido,
        }, {
            where: {
                rolId: id,
                valido: 'AC',
            },
        });
    }

    // Eliminar

    async destroy(id): Promise<[number, Rol[]]> {
        return await this.rolRepository.update<Rol>({
            valido: 'AN',
        }, {
            where: {
                rolId: id,
                valido: 'AC',
            },
        });
    }

    // Buscar Rol por Id

    async findById(id): Promise<Rol> {
        return await this.rolRepository.findOne<Rol>({
            attributes: ['rolId', 'nombre', 'descripcion', 'observacion', 'valido'],
            where: {
                rolId: id,
                valido: 'AC',
            },
        });
    }
}
