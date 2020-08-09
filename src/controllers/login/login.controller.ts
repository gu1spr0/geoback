import { Login } from './../../models/login.entity';
import { LoginService } from './../../services/login/login.service';
import { Controller, Post, Body, Get, Res, Param, HttpStatus, Put, Delete, UseGuards } from '@nestjs/common';
import { Roles } from '../../auth/decorators/rol.decorator';
import { AuthGuard } from '@nestjs/passport';
import { RoleGuard } from '../../auth/guards/role.guard';
@Controller('login')
@Roles('ADMIN', 'SUPERVISOR')
@UseGuards(AuthGuard('jwt'), RoleGuard)
export class LoginController {
    constructor(private readonly loginService: LoginService) { }

    @Get()
    public async indexAll(@Res() response) {
        return await this.loginService.indexAll().then(resultado => {
            response.status(HttpStatus.OK).json(resultado);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la obtencion de datos' });
        });
        // return await this.ayudanteService.indexAll();
    }

    // @Get('/valid')
    // public async index(@Res() response) {
    //     return await this.loginService.index().then( resultado => {
    //         response.status(HttpStatus.OK).json(resultado);
    //     }).catch( () => {
    //         response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la obtencion de datos' });
    //     });
    // }

    @Get(':id')
    public async show(@Res() response, @Param('id') id) {
        return await this.loginService.show(id).then(resultado => {
            response.status(HttpStatus.OK).json(resultado);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la obtencion del dato' });
        });
    }

    @Post()
    add(@Body() login: Login, @Res() response) {
        return this.loginService.store(login).then(respuesta => {
            response.status(HttpStatus.CREATED).json(respuesta);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error al agregar registro' });
        });
    }

    @Put(':id')
    update(@Body() login: Login, @Param('id') id, @Res() response) {
        return this.loginService.update(id, login).then(respuesta => {
            response.status(HttpStatus.CREATED).json(respuesta);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error al agregar registro' });
        });
    }

    // @Delete(':id')
    // delete(@Res() response, @Param('id') id) {
    //     return this.loginService.destroy(id).then( respuesta => {
    //         response.status(HttpStatus.CREATED).json(respuesta);
    //     }).catch( () => {
    //         response.status(HttpStatus.FORBIDDEN).json({mensaje: 'Error al agregar registro'});
    //     });
    // }
}
