import { Departamento } from './../../models/departamento.entity';
import { Evento } from './../../models/evento.entity';
import { Vehiculo } from './../../models/vehiculo.entity';
import { Persona } from './../../models/persona.entity';
import { Conductor } from './../../models/conductor.entity';
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class ConductorService {
    constructor(
        @Inject('CONDUCTOR_REPOSITORY') private readonly conductorRepository: typeof Conductor,
        @Inject('SEQUELIZE') private readonly sequelize) { }

    // Lista todos /messages
    async indexAll(): Promise<Conductor[]> {
        return await this.conductorRepository.findAll<Conductor>({
            include: [
                {
                    model: Persona, include: [{ model: Departamento, attributes: ['departamentoId', 'departamento', 'sigla'] }], attributes: [
                        'personaId', 'cedula', 'nombre', 'paterno', 'materno', 'celular', 'direccion', 'email', 'valido']
                },
                { model: Evento, attributes: ['eventoId', 'evento', 'fecha', 'hora'] },
                { model: Vehiculo, attributes: ['vehiculoId', 'placa', 'capacidad', 'unidad', 'marca', 'modelo', 'valido'] },
            ],
            attributes: ['conductorId', 'categoria'],
        });
    }
    async index(): Promise<Conductor[]> {
        return await this.conductorRepository.findAll<Conductor>({
            include: [
                {
                    model: Persona, include: [{ model: Departamento, attributes: ['departamentoId', 'departamento', 'sigla'] }], attributes: [
                        'personaId', 'cedula', 'nombre', 'paterno', 'materno', 'celular', 'direccion', 'email', 'valido'], where: {
                            valido: 'AC',
                        }
                },
                { model: Evento, attributes: ['eventoId', 'evento', 'fecha', 'hora'] },
                { model: Vehiculo, attributes: ['vehiculoId', 'placa', 'capacidad', 'unidad', 'marca', 'modelo', 'valido'] },
            ],
            attributes: ['conductorId', 'categoria'],
        });
    }
    // Creacion de registro /messages
    async store(conductor: Conductor): Promise<Conductor> {
        const t = await this.sequelize.transaction();
        try {
            conductor.personaId = conductor.persona.personaId;
            const p = await this.conductorRepository.create<Conductor>(conductor, { transaction: t });
            await t.commit();
            return p;
        } catch (error) {
            await t.rollback();
            throw new Error();
        }
        return await this.conductorRepository.create<Conductor>(conductor);
    }

    // Registro Especifico /messages/{id}
    async show(id): Promise<Conductor> {
        return await this.conductorRepository.findOne<Conductor>({
            include: [
                {
                    model: Persona, include: [{ model: Departamento, attributes: ['departamentoId', 'departamento', 'sigla'] }], attributes: [
                        'personaId', 'cedula', 'nombre', 'paterno', 'materno', 'celular', 'direccion', 'email', 'valido'], where: {
                            valido: 'AC',
                        }
                },
                { model: Evento, attributes: ['eventoId', 'evento', 'fecha', 'hora'] },
                { model: Vehiculo, attributes: ['vehiculoId', 'placa', 'capacidad', 'unidad', 'marca', 'modelo', 'valido'] },
            ],
            attributes: ['conductorId', 'categoria'],
            where: {
                conductorId: id,
            },
        });
    }

    // Modificar

    async update(id, nuevo: Conductor): Promise<[number, Conductor[]]> {
        return await this.conductorRepository.update<Conductor>({
            categoria: nuevo.categoria,
        }, {
            where: {
                conductorId: id,
            },
        });
    }

    // Eliminar

    async destroy(id): Promise<[number, Conductor[]]> {
        return await this.conductorRepository.update<Conductor>({
            valido: 'AN',
        }, {
            where: {
                conductorId: id,
            },
        });
    }
}
