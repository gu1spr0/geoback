import { Departamento } from './../../models/departamento.entity';
import { Persona } from './../../models/persona.entity';
import { Injectable, Inject } from '@nestjs/common';
import { Transaction } from 'sequelize/types';
import { PersonaDto } from '../../dto/persona.dto';

@Injectable()
export class PersonaService {
    constructor(
        @Inject('PERSONA_REPOSITORY') private readonly personaRepository: typeof Persona,
        @Inject('SEQUELIZE') private readonly sequelize) { }

    // Lista todos /messages
    async indexAll(): Promise<Persona[]> {
        return await this.personaRepository.findAll<Persona>({
            include: [
                {
                    model: Departamento,
                    attributes: [
                        'departamentoId',
                        'departamento',
                        'sigla',
                        'valido',
                    ],
                },
            ],
            attributes: ['personaId', 'cedula', 'nombre', 'paterno', 'materno', 'telefono', 'celular', 'direccion', 'email', 'valido'],
        });
    }
    async index(): Promise<Persona[]> {
        return await this.personaRepository.findAll<Persona>({
            include: [
                {
                    model: Departamento,
                    attributes: [
                        'departamentoId',
                        'departamento',
                        'sigla',
                        'valido',
                    ],
                },
            ],
            attributes: ['personaId', 'cedula', 'nombre', 'paterno', 'materno', 'telefono', 'celular', 'direccion', 'email', 'valido'],
            where: {
                valido: 'AC',
            },
        });
    }

    // Creacion de registro /messages
    async store(persona: Persona): Promise<Persona> {
        const t = await this.sequelize.transaction();
        try {
            persona.departamentoId = persona.departamento.departamentoId;
            const p = await this.personaRepository.create<Persona>(persona, { transaction: t });
            await t.commit();
            return p;
        } catch (error) {
            await t.rollback();
            throw new Error();
        }
    }

    // Registro Especifico /messages/{id}
    async show(id): Promise<Persona> {
        return await this.personaRepository.findOne<Persona>({
            include: [
                {
                    model: Departamento,
                    attributes: [
                        'departamentoId',
                        'departamento',
                        'sigla',
                        'valido',
                    ],
                },
            ],
            attributes: ['personaId', 'cedula', 'nombre', 'paterno', 'materno', 'telefono', 'celular', 'direccion', 'email', 'valido'],
            where: {
                personaId: id,
                valido: 'AC',
            },
        });
    }

    // Modificar

    async update(id, nuevo: Persona): Promise<[number, Persona[]]> {
        const t = await this.sequelize.transaction();
        try {
            const p = await this.personaRepository.update<Persona>({
                cedula: nuevo.cedula,
                nombre: nuevo.nombre,
                paterno: nuevo.paterno,
                materno: nuevo.materno,
                telefono: nuevo.telefono,
                celular: nuevo.celular,
                direccion: nuevo.direccion,
                email: nuevo.email,
                departamentoId: nuevo.departamento.departamentoId,
            }, {
                where: {
                    personaId: id,
                    valido: 'AC',
                },
                transaction: t,
            });
            await t.commit();
            return p;
        } catch (error) {
            await t.rollback();
            throw new Error();
        }
    }

    // Eliminar

    async destroy(id): Promise<[number, Persona[]]> {
        const t = await this.sequelize.transaction();
        try {
            const p = await this.personaRepository.update<Persona>({
                valido: 'AN',
            }, {
                where: {
                    personaId: id,
                },
                transaction: t,
            });
            await t.commit();
            return p;
        } catch (error) {
            await t.rollback();
            throw new Error();
        }
    }
}
