import { Departamento } from './../models/departamento.entity';

export const departamentoProvider = [
    {
        provide: 'DEPARTAMENTO_REPOSITORY',
        useValue: Departamento,
    },
];
