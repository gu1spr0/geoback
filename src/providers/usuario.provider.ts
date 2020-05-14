import { Usuario } from './../models/usuario.entity';

export const usuarioProvider = [
    {
        provide: 'USUARIO_REPOSITORY',
        useValue: Usuario,
    },
];
