import { AyudanteService } from './../../services/ayudante/ayudante.service';
import { Ayudante } from './../../models/ayudante.entity';
import { Controller, Post, Get, Res, Param, HttpStatus, Body, Put, Delete, UseGuards } from '@nestjs/common';
import { Roles } from '../../auth/decorators/rol.decorator';
import { AuthGuard } from '@nestjs/passport';
import { RoleGuard } from '../../auth/guards/role.guard';

@Controller('ayudante')
@Roles('ADMIN', 'SUPERVISOR')
@UseGuards(AuthGuard('jwt'), RoleGuard)
export class AyudanteController {
    constructor(private readonly ayudanteService: AyudanteService) { }

    @Get()
    public async indexAll(@Res() response) {
        return await this.ayudanteService.indexAll().then(ayudantes => {
            response.status(HttpStatus.OK).json(ayudantes);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la obtencion de datos' });
        });
        // return await this.ayudanteService.indexAll();
    }

    @Get('/valid')
    public async index(@Res() response) {
        return await this.ayudanteService.index().then(ayudantes => {
            response.status(HttpStatus.OK).json(ayudantes);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la obtencion de datos' });
        });
    }

    @Get(':id')
    public async show(@Res() response, @Param('id') id) {
        return await this.ayudanteService.show(id).then(ayudante => {
            response.status(HttpStatus.OK).json(ayudante);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la obtencion del dato' });
        });
    }

    @Post()
    add(@Body() ayudante: Ayudante, @Res() response) {
        return this.ayudanteService.store(ayudante).then(respuesta => {
            response.status(HttpStatus.CREATED).json(respuesta);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error al agregar registro' });
        });
    }

    @Put(':id')
    update(@Body() ayudante: Ayudante, @Param('id') id, @Res() response) {
        return this.ayudanteService.update(id, ayudante).then(respuesta => {
            response.status(HttpStatus.CREATED).json(respuesta);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error al agregar registro' });
        });
    }

    @Delete(':id')
    delete(@Res() response, @Param('id') id) {
        return this.ayudanteService.destroy(id).then(respuesta => {
            response.status(HttpStatus.CREATED).json(respuesta);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error al agregar registro' });
        });
    }
}
