import { Usuario } from './../../models/usuario.entity';
import { UsuarioService } from './../../services/usuario/usuario.service';
import { Controller, Post, Body, Request, HttpStatus, Get, Res, Param, Put, Delete, UseGuards, Inject } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from '../../auth/decorators/rol.decorator';
import { RoleGuard } from '../../auth/guards/role.guard';

@Controller('usuario')
@Roles('ADMIN', 'SUPERVISOR')
@UseGuards(AuthGuard('jwt'), RoleGuard)
export class UsuarioController {
    constructor(
        private readonly usuarioService: UsuarioService) { }

    @Get()
    public async indexAll(@Res() response) {
        return await this.usuarioService.indexAll().then(resultado => {
            response.status(HttpStatus.OK).json(resultado);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la obtencion de datos' });
        });
    }

    @Get('/valid')
    public async index(@Res() response) {
        return await this.usuarioService.index().then(resultado => {
            response.status(HttpStatus.OK).json(resultado);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la obtencion de datos' });
        });
    }

    @Get(':id')
    public async show(@Res() response, @Param('id') id) {
        return await this.usuarioService.show(id).then(resultado => {
            response.status(HttpStatus.OK).json(resultado);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la obtencion del dato' });
        });
    }

    @Get(':usuario/login')
    public async user(@Res() response, @Param('usuario') usuario) {
        return await this.usuarioService.findAuth(usuario).then(resultado => {
            response.status(HttpStatus.OK).json(resultado);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la obtencion del dato' });
        });
    }

    @Post()
    add(@Body() usuario: Usuario, @Res() response) {
        return this.usuarioService.store(usuario).then(respuesta => {
            response.status(HttpStatus.CREATED).json(respuesta);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error al agregar registro de usuario' });
        });
    }

    @Put(':id')
    update(@Body() usuario: Usuario, @Param('id') id, @Res() response) {
        return this.usuarioService.update(id, usuario).then(respuesta => {
            response.status(HttpStatus.CREATED).json(respuesta);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error al modificar registro' });
        });
    }

    @Delete(':id')
    delete(@Res() response, @Param('id') id) {
        return this.usuarioService.destroy(id).then(respuesta => {
            response.status(HttpStatus.OK).json(respuesta);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error al eliminar registro' });
        });
    }
}
