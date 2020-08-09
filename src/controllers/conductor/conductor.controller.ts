import { ConductorService } from './../../services/conductor/conductor.service';

import { Conductor } from './../../models/conductor.entity';
import { Controller, Get, Res, Param, HttpStatus, Post, Body, Put, Delete, UseGuards } from '@nestjs/common';
import { Roles } from '../../auth/decorators/rol.decorator';
import { AuthGuard } from '@nestjs/passport';
import { RoleGuard } from '../../auth/guards/role.guard';

@Controller('conductor')
export class ConductorController {
    constructor(private readonly conductorService: ConductorService) { }
    @Get()
    public async indexAll(@Res() response) {
        return await this.conductorService.indexAll().then(conductores => {
            response.status(HttpStatus.OK).json(conductores);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la obtencion de datos' });
        });
        // return await this.ayudanteService.indexAll();
    }

    @Get('/valid')
    public async index(@Res() response) {
        return await this.conductorService.index().then(conductores => {
            response.status(HttpStatus.OK).json(conductores);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la obtencion de datos' });
        });
    }

    @Get(':id')
    public async show(@Res() response, @Param('id') id) {
        return await this.conductorService.show(id).then(conductor => {
            response.status(HttpStatus.OK).json(conductor);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la obtencion del dato' });
        });
    }

    @Post()
    @Roles('ADMIN', 'SUPERVISOR')
    @UseGuards(AuthGuard('jwt'), RoleGuard)
    add(@Body() conductor: Conductor, @Res() response) {
        return this.conductorService.store(conductor).then(respuesta => {
            response.status(HttpStatus.CREATED).json(respuesta);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error al agregar registro' });
        });
    }

    @Put(':id')
    @Roles('ADMIN', 'SUPERVISOR')
    @UseGuards(AuthGuard('jwt'), RoleGuard)
    update(@Body() conductor: Conductor, @Param('id') id, @Res() response) {
        return this.conductorService.update(id, conductor).then(respuesta => {
            response.status(HttpStatus.CREATED).json(respuesta);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error al agregar registro' });
        });
    }

    @Delete(':id')
    @Roles('ADMIN', 'SUPERVISOR')
    @UseGuards(AuthGuard('jwt'), RoleGuard)
    delete(@Res() response, @Param('id') id) {
        return this.conductorService.destroy(id).then(respuesta => {
            response.status(HttpStatus.CREATED).json(respuesta);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error al agregar registro' });
        });
    }

}
