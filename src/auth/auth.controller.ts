import { Usuario } from './../models/usuario.entity';
import { AuthService } from './auth.service';
import { Controller, Post, Body, UsePipes, ValidationPipe, HttpStatus } from '@nestjs/common';
import { SigninDto } from './dto/signin.dto';
import { UsuarioDto } from './dto/usuario.dto';
import { response } from 'express';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }
    // @Post('/signin')
    // @UsePipes(ValidationPipe)
    // async signin(@Body() signinDto: SigninDto) {
    //     return this.authService.signin(signinDto);
    // }
    @Post('/signin')
    @UsePipes(ValidationPipe)
    async signin(@Body() usuario: Usuario) {
        return this.authService.signin(usuario);
        // return this.authService.signin(usuario).then(respuesta => {
        //     response.status(HttpStatus.ACCEPTED).json(respuesta);
        // }).catch(() => {
        //     response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error al obtener usuario' });
        // });
    }
}
