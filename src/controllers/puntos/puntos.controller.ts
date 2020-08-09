import { Puntos } from './../../models/puntos.entity';
import { Controller, Res, HttpStatus, Get, Post, Delete, Param, Body, Put, UseGuards } from '@nestjs/common';
import { PuntosService } from '../../services/puntos/puntos.service';
import { Roles } from '../../auth/decorators/rol.decorator';
import { AuthGuard } from '@nestjs/passport';
import { RoleGuard } from '../../auth/guards/role.guard';

@Controller('puntos')
export class PuntosController {
    constructor(private readonly puntosService: PuntosService) { }

    @Get()
    public async indexAll(@Res() response) {
        return await this.puntosService.indexAll().then(puntos => {
            response.status(HttpStatus.OK).json(puntos);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la obtencion de datos todos' });
        });
        // return await this.ayudanteService.indexAll();
    }

    @Get('/valid')
    public async index(@Res() response) {
        return await this.puntosService.index().then(puntos => {
            response.status(HttpStatus.OK).json(puntos);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la obtencion de datos' });
        });
    }

    @Post()
    @Roles('ADMIN', 'SUPERVISOR')
    @UseGuards(AuthGuard('jwt'), RoleGuard)
    add(@Body() punto: Puntos, @Res() response) {
        return this.puntosService.store(punto).then(respuesta => {
            response.status(HttpStatus.CREATED).json(respuesta);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error al agregar registro' });
        });
    }

    @Put(':id')
    @Roles('ADMIN', 'SUPERVISOR')
    @UseGuards(AuthGuard('jwt'), RoleGuard)
    update(@Param('id') id, @Res() response) {
        return this.puntosService.update(id).then(respuesta => {
            response.status(HttpStatus.CREATED).json(respuesta);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error al agregar registro' });
        });
    }

    // @Delete(':id')
    // delete(@Res() response, @Param('id') id) {
    //     return this.puntosService.destroy(id).then(respuesta => {
    //         response.status(HttpStatus.CREATED).json(respuesta);
    //     }).catch(() => {
    //         response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error al eliminar registro' });
    //     });
    // }
}
