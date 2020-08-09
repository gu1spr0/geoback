import { Injectable, Inject } from '@nestjs/common';
import { Departamento } from './../../models/departamento.entity';
import { Rol } from './../../models/rol.entity';
import { Persona } from './../../models/persona.entity';
import { Usuario } from './../../models/usuario.entity';
import * as bycript from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UsuarioService {
    constructor(
        @Inject('USUARIO_REPOSITORY') private readonly usuarioRepository: typeof Usuario,
        @Inject('PERSONA_REPOSITORY') private readonly personaRepository: typeof Persona,
        @Inject('SEQUELIZE') private readonly sequelize) {
        // @Inject('SequelizeInstance') private readonly sequelizeInstance
    }

    // Lista todos /messages
    async indexAll(): Promise<Usuario[]> {
        return await this.usuarioRepository.findAll<Usuario>({
            include: [
                {
                    model: Rol,
                    attributes: [
                        'rolId',
                        'nombre',
                        'descripcion',
                        'observacion',
                        'valido',
                    ],
                },
                {
                    model: Persona,
                    attributes: [
                        'personaId',
                        'cedula',
                        'nombre',
                        'paterno',
                        'materno',
                        'telefono',
                        'direccion',
                        'celular',
                        'email',
                        'valido',
                    ],
                    include: [
                        {
                            model: Departamento,
                            attributes: [
                                'departamentoId',
                                'departamento',
                                'sigla',
                            ],
                        },
                    ],
                },
            ],
            attributes: ['usuarioId', 'nombre', 'contraseña', 'valido'],
        });
    }
    async index(): Promise<Usuario[]> {
        return await this.usuarioRepository.findAll<Usuario>({
            include: [
                {
                    model: Rol,
                    attributes: [
                        'rolId',
                        'nombre',
                        'descripcion',
                        'observacion',
                        'valido',
                    ],
                },
                {
                    model: Persona,
                    attributes: [
                        'personaId',
                        'cedula',
                        'nombre',
                        'paterno',
                        'materno',
                        'telefono',
                        'direccion',
                        'celular',
                        'email',
                        'valido',
                    ],
                    include: [
                        {
                            model: Departamento,
                            attributes: [
                                'departamentoId',
                                'departamento',
                                'sigla',
                            ],
                        },
                    ],
                },
            ],
            attributes: ['usuarioId', 'nombre', 'contraseña', 'valido'],
            where: {
                valido: 'AC',
            },
        });
    }

    async findAuth(username: string): Promise<Usuario> {
        return await this.usuarioRepository.findOne<Usuario>({
            include: [
                {
                    model: Rol,
                    attributes: [
                        'rolId',
                        'nombre',
                        'descripcion',
                        'observacion',
                        'valido',
                    ],
                },
                {
                    model: Persona,
                    attributes: [
                        'personaId',
                        'cedula',
                        'nombre',
                        'paterno',
                        'materno',
                        'telefono',
                        'direccion',
                        'celular',
                        'email',
                        'valido',
                    ],
                    include: [
                        {
                            model: Departamento,
                            attributes: [
                                'departamentoId',
                                'departamento',
                                'sigla',
                            ],
                        },
                    ],
                },
            ],
            attributes: ['usuarioId', 'nombre', 'contraseña', 'valido'],
            where: {
                nombre: username,
                valido: 'AC',
            },
        });
    }

    // Creacion de registro /messages
    async store(usuario: Usuario): Promise<any> {
        console.log(usuario);
        const t = await this.sequelize.transaction();
        try {
            usuario.persona.departamentoId = usuario.persona.departamento.departamentoId;
            const p = await this.personaRepository.create<Persona>(usuario.persona, { transaction: t });
            usuario.persona = p;
            usuario.personaId = p.personaId;
            usuario.rolId = usuario.rol.rolId;
            usuario.contraseña = await bcrypt.hash(usuario.contraseña, 10);
            const u = await this.usuarioRepository.create<Usuario>(usuario, { transaction: t });
            await t.commit();
            return u;
        } catch (error) {
            await t.rollback();
            console.log(error);
            throw new Error();
        }
    }

    // Registro Especifico /messages/{id}
    async show(id): Promise<Usuario> {
        return await this.usuarioRepository.findOne<Usuario>({
            include: [
                {
                    model: Rol,
                    attributes: [
                        'nombre',
                        'descripcion',
                        'observacion',
                        'valido',
                    ],
                },
                {
                    model: Persona,
                    attributes: [
                        'cedula',
                        'nombre',
                        'paterno',
                        'materno',
                        'telefono',
                        'direccion',
                        'celular',
                        'email',
                        'valido',
                    ],
                    include: [
                        {
                            model: Departamento,
                            attributes: [
                                'departamento',
                                'sigla',
                            ],
                        },
                    ],
                },
            ],
            attributes: ['nombre', 'contraseña', 'valido'],
            where: {
                usuarioId: id,
                valido: 'AC',
            },
        });
    }

    // Modificar

    async update(id, nuevo: Usuario): Promise<[number, Usuario[]]> {
        const t = await this.sequelize.transaction();
        try {
            const p = await this.personaRepository.update<Persona>({
                cedula: nuevo.persona.cedula,
                nombre: nuevo.persona.nombre,
                paterno: nuevo.persona.paterno,
                materno: nuevo.persona.materno,
                telefono: nuevo.persona.telefono,
                celular: nuevo.persona.celular,
                email: nuevo.persona.celular,
                departamentoId: nuevo.persona.departamento.departamentoId,
                direccion: nuevo.persona.direccion,
            }, {
                where: {
                    personaId: nuevo.persona.personaId,
                    valido: 'AC',
                },
                transaction: t,
            });

            const u = await this.usuarioRepository.update<Usuario>({
                nombre: nuevo.nombre,
                contraseña: nuevo.contraseña,
                rolId: nuevo.rol.rolId,
            }, {
                where: {
                    usuarioId: nuevo.usuarioId,
                    valido: 'AC',
                },
                transaction: t,

            });
            await t.commit();
            return u;
        } catch (error) {
            await t.rollback();
            console.log(error);
            throw new Error();
        }
    }

    // Eliminar

    async destroy(id): Promise<[number, Usuario[]]> {

        const t = await this.sequelize.transaction();
        try {
            const u = await this.usuarioRepository.update<Usuario>({
                valido: 'AN',
            }, {
                where: {
                    usuarioId: id,
                },
                transaction: t,
            });
            await t.commit();
            return u;
        } catch (error) {
            await t.rollback();
            console.log(error);
            throw new Error();
        }
    }

    // ************************************************Metodos para autenticacion
    /*async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.usuarioRepository.findOne<Usuario>({
            include: [
                {
                    model: Rol,
                    attributes: [
                        'nombre',
                        'descripcion',
                        'observacion',
                        'valido',
                    ],
                },
                {
                    model: Persona,
                    attributes: [
                        'cedula',
                        'nombre',
                        'paterno',
                        'materno',
                        'telefono',
                        'direccion',
                        'celular',
                        'email',
                        'valido',
                    ],
                    include: [
                        {
                            model: Departamento,
                            attributes: [
                                'departamento',
                                'sigla',
                            ],
                        },
                    ],
                },
            ],
            attributes: ['nombre', 'contraseña', 'valido'],
            where: {
                nombre: username,
                contraseña: pass,
                valido: 'AC',
            },
        });

        if (user && (await this.passwordsAreEqual(user.contraseña, pass))) {
            const { contraseña, ...result } = user;
            return result;
        }
        return null;
    }*/

    /*async login(user: any) {
        const payload = { username: user.nombre, sub: user.usuarioId };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }*/

    /*private async passwordsAreEqual(hashedPassword: string, plainPassword: string): Promise<boolean> {
        return await (hashedPassword === plainPassword) ? true : false;
    }*/
}
