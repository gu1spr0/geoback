import { IsNotEmpty, IsString } from 'class-validator';

export class SigninDto {
    @IsNotEmpty()
    @IsString()
    nombre: string;

    @IsNotEmpty()
    @IsString()
    contraseña: string;
}
