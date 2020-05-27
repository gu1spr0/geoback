import { RoleType } from './roletype.enum';

export interface IJwtPayload {
    id: number;
    username: string;
    usuario: string;
    rol: string;
    iat?: Date;
}
