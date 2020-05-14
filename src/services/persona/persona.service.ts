import { Departamento } from './../../models/departamento.entity';
import { Persona } from './../../models/persona.entity';
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class PersonaService {
    constructor(@Inject('PERSONA_REPOSITORY') private readonly personaRepository: typeof Persona) { }

    // Lista todos /messages
    async indexAll(): Promise<Persona[]> {
        return await this.personaRepository.findAll<Persona>({
            include: [
                {
                    model: Departamento,
                    attributes: [
                        'departamento',
                        'sigla',
                        'valido',
                    ],
                },
            ],
            attributes: ['cedula', 'nombre', 'paterno', 'materno', 'telefono', 'celular', 'direccion', 'email', 'valido'],
        });
    }
    async index(): Promise<Persona[]> {
        return await this.personaRepository.findAll<Persona>({
            include: [
                {
                    model: Departamento,
                    attributes: [
                        'departamento',
                        'sigla',
                        'valido',
                    ],
                },
            ],
            attributes: ['cedula', 'nombre', 'paterno', 'materno', 'telefono', 'celular', 'direccion', 'email', 'valido'],
            where: {
                valido: 'AC',
            },
        });
    }

    // Creacion de registro /messages
    async store(persona: Persona): Promise<Persona> {
        return await this.personaRepository.create<Persona>(persona);
    }

    // Registro Especifico /messages/{id}
    async show(id): Promise<Persona> {
        return await this.personaRepository.findOne<Persona>({
            include: [
                {
                    model: Departamento,
                    attributes: [
                        'departamento',
                        'sigla',
                        'valido',
                    ],
                },
            ],
            attributes: ['cedula', 'nombre', 'paterno', 'materno', 'telefono', 'celular', 'direccion', 'email', 'valido'],
            where: {
                personaId: id,
                valido: 'AC',
            },
        });
    }

    // Modificar

    async update(id, nuevo: Persona): Promise<[number, Persona[]]> {
        return await this.personaRepository.update<Persona>({
            cedula: nuevo.cedula,
            nombre: nuevo.nombre,
            paterno: nuevo.paterno,
            materno: nuevo.materno,
            telefono: nuevo.telefono,
            celular: nuevo.celular,
            direccion: nuevo.direccion,
            email: nuevo.email,
            valido: nuevo.valido,
        }, {
            where: {
                personId: id,
                valido: 'AC',
            },
        });
    }

    // Eliminar

    async destroy(id): Promise<[number, Persona[]]> {
        return await this.personaRepository.update<Persona>({
            valido: 'AN',
        }, {
            where: {
                personaId: id,
            },
        });
    }
}
