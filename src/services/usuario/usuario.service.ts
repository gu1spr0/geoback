import { Injectable, Inject } from '@nestjs/common';
import { Departamento } from './../../models/departamento.entity';
import { Rol } from './../../models/rol.entity';
import { Persona } from './../../models/persona.entity';
import { Usuario } from './../../models/usuario.entity';
import * as bycript from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class UsuarioService {
    constructor(
        @Inject('USUARIO_REPOSITORY') private readonly usuarioRepository: typeof Usuario) { }

    // Lista todos /messages
    async indexAll(): Promise<Usuario[]> {
        return await this.usuarioRepository.findAll<Usuario>({
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
        });
    }
    async index(): Promise<Usuario[]> {
        return await this.usuarioRepository.findAll<Usuario>({
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
            attributes: ['usuarioId', 'nombre', 'contraseña', 'valido'],
            where: {
                nombre: username,
                valido: 'AC',
            },
        });
    }

    // Creacion de registro /messages
    async store(usuario: Usuario): Promise<Usuario> {
        return await this.usuarioRepository.create<Usuario>(usuario);
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
        return await this.usuarioRepository.update<Usuario>({
            nombre: nuevo.nombre,
            contraseña: nuevo.contraseña,
            valido: nuevo.valido,
        }, {
            where: {
                usuarioId: id,
                valido: 'AC',
            },
        });
    }

    // Eliminar

    async destroy(id): Promise<[number, Usuario[]]> {
        return await this.usuarioRepository.update<Usuario>({
            valido: 'AN',
        }, {
            where: {
                usuarioId: id,
                valido: 'AC',
            },
        });
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
