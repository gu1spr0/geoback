import { DistritoMacro } from './../models/distrito_macro.entity';

export const distritoMacroProvider = [
    {
        provide: 'DISTRITO_MACRO_REPOSITORY',
        useValue: DistritoMacro,
    },
];
