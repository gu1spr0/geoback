import { Departamento } from './../../models/departamento.entity';
import { Rol } from './../../models/rol.entity';
import { Persona } from './../../models/persona.entity';
import { Usuario } from './../../models/usuario.entity';
import { Login } from './../../models/login.entity';
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class LoginService {
    constructor(@Inject('LOGIN_REPOSITORY') private readonly loginRepository: typeof Login) { }

    // Lista todos /messages
    async indexAll(): Promise<Login[]> {
        return await this.loginRepository.findAll<Login>({
            include: [
                {
                    model: Usuario,
                    include: [
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
                        {
                            model: Rol,
                            attributes: [
                                'nombre',
                                'descripcion',
                                'observacion',
                                'valido',
                            ],
                        },
                    ],
                    attributes: [
                        'valido',
                    ],
                },
            ],
            attributes: ['fecha', 'hora'],
        });
    }
    // Creacion de registro /messages
    async store(login: Login): Promise<Login> {
        return await this.loginRepository.create<Login>(login);
    }

    // Registro Especifico /messages/{id}
    async show(id): Promise<Login> {
        return await this.loginRepository.findOne<Login>({
            include: [
                {
                    model: Usuario,
                    include: [
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
                        {
                            model: Rol,
                            attributes: [
                                'nombre',
                                'descripcion',
                                'observacion',
                                'valido',
                            ],
                        },
                    ],
                    attributes: [
                        'valido',
                    ],
                },
            ],
            attributes: ['fecha', 'hora'],
            where: {
                loginId: id,
            },
        });
    }

    // Modificar

    async update(id, nuevo: Login): Promise<[number, Login[]]> {
        return await this.loginRepository.update<Login>({
            fecha: nuevo.fecha,
            hora: nuevo.hora,
        }, {
            where: {
                loginId: id,
            },
        });
    }

    // Eliminar

    // async destroy(id): Promise<[number, Login[]]> {
    //     return await this.loginRepository.destroy<Login>({
    //         valido: 'AN',
    //     }, {
    //         where: {
    //             loginId: id,
    //         },
    //     });
    // }
}
