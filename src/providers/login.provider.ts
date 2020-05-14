import { Login } from './../models/login.entity';

export const loginProvider = [
    {
        provide: 'LOGIN_REPOSITORY',
        useValue: Login,
    },
];
