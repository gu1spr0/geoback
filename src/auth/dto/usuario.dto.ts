import { IsNotEmpty } from 'class-validator';

export class UsuarioDto {
    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    nombre: string;
}
