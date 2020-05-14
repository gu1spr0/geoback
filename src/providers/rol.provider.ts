import { Rol } from './../models/rol.entity';

export const rolProvider = [
    {
        provide: 'ROL_REPOSITORY',
        useValue: Rol,
    },
];
