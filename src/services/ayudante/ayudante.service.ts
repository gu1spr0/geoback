import { Departamento } from './../../models/departamento.entity';
import { Injectable, Inject } from '@nestjs/common';
import { Persona } from './../../models/persona.entity';
import { Vehiculo } from './../../models/vehiculo.entity';
import { Ayudante } from './../../models/ayudante.entity';
@Injectable()
export class AyudanteService {
    constructor(@Inject('AYUDANTE_REPOSITORY') private readonly ayudanteRepository: typeof Ayudante) { }

    // Lista todos /messages
    async indexAll(): Promise<Ayudante[]> {
        return await this.ayudanteRepository.findAll<Ayudante>({
            include: [
                {
                    model: Persona, include: [{
                        model: Departamento, attributes: ['departamentoId', 'departamento', 'sigla'],
                    }], attributes: ['personaId', 'cedula', 'nombre', 'paterno', 'materno', 'celular', 'direccion', 'email']
                },
                { model: Vehiculo, attributes: ['vehiculoId', 'placa', 'capacidad', 'unidad', 'marca', 'modelo'] },
            ],
            attributes: ['ayudanteId', 'descripcion', 'valido'],
        });
    }
    async index(): Promise<Ayudante[]> {
        return await this.ayudanteRepository.findAll<Ayudante>({
            include: [
                {
                    model: Persona, include: [{
                        model: Departamento, attributes: ['departamentoId', 'departamento', 'sigla'],
                    }], attributes: ['personaId', 'cedula', 'nombre', 'paterno', 'materno', 'celular', 'direccion', 'email']
                },
                { model: Vehiculo, attributes: ['vehiculoId', 'placa', 'capacidad', 'unidad', 'marca', 'modelo'] },
            ],
            attributes: ['ayudanteId', 'descripcion', 'valido'],
            where: {
                valido: 'AC',
            },
        });
    }

    // Creacion de registro /messages
    async store(ayudante: Ayudante): Promise<Ayudante> {
        return await this.ayudanteRepository.create<Ayudante>(ayudante);
    }

    // Registro Especifico /messages/{id}
    async show(id): Promise<Ayudante> {
        return await this.ayudanteRepository.findOne<Ayudante>({
            include: [
                {
                    model: Persona, include: [{
                        model: Departamento, attributes: ['departamentoId', 'departamento', 'sigla'],
                    }], attributes: ['personaId', 'cedula', 'nombre', 'paterno', 'materno', 'celular', 'direccion', 'email']
                },
                { model: Vehiculo, attributes: ['vehiculoId', 'placa', 'capacidad', 'unidad', 'marca', 'modelo'] },
            ],
            attributes: ['ayudanteId', 'descripcion', 'valido'],
            where: {
                ayudanteId: id,
                valido: 'AC',
            },
        });
    }

    // Modificar

    async update(id, nuevo: Ayudante): Promise<[number, Ayudante[]]> {
        return await this.ayudanteRepository.update<Ayudante>({
            descripcion: nuevo.descripcion,
            valido: nuevo.valido,
        }, {
            where: {
                ayudanteId: id,
            },
        });
    }

    // Eliminar

    async destroy(id): Promise<[number, Ayudante[]]> {
        return await this.ayudanteRepository.update<Ayudante>({
            valido: 'AN',
        }, {
            where: {
                ayudanteId: id,
            },
        });
    }
}
