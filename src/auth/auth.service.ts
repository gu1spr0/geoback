import { Usuario } from './../models/usuario.entity';
import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from '../services/usuario/usuario.service';
import { compare } from 'bcryptjs';
import { IJwtPayload } from './jwt-payload.interface';
import { SigninDto } from './dto/signin.dto';

@Injectable()
export class AuthService {
    constructor(
        private readonly usuarioService: UsuarioService,
        private readonly jwtService: JwtService,
    ) { }

    async signin(signinDto: SigninDto): Promise<{ token: string }> {
        const { nombre, contraseña } = signinDto;

        const user = await this.usuarioService.findAuth(nombre);
        if (!user) {
            throw new NotFoundException('Usuario inexistente');
        }
        if (contraseña !== user.contraseña) {
            throw new UnauthorizedException('Credenciales invalidas');
        }

        const completo = user.persona.nombre + ' ' + user.persona.paterno;
        const payload: IJwtPayload = {
            id: user.usuarioId,
            username: user.nombre,
            usuario: completo,
            rol: user.rol.nombre,
        };

        const token = await this.jwtService.sign(payload);
        return { token };
    }

    async all(): Promise<Usuario[]> {
        const users = this.usuarioService.indexAll();
        return users;
    }


    /*private async passwordsAreEqual(
        hashedPassword: string,
        plainPassword: string
    ): Promise<boolean> {
        return await bcrypt.compare(plainPassword, hashedPassword);
    }*/
}
