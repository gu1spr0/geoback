import { Distrito } from './../../models/distrito.entity';
import { DistritoService } from './../../services/distrito/distrito.service';
import { Controller, Get, Res, Param, HttpStatus, Post, Body, Put, Delete } from '@nestjs/common';

@Controller('distrito')
export class DistritoController {
    constructor(private readonly distritoService: DistritoService) {}

    @Get()
    public async indexAll(@Res() response) {
        return await this.distritoService.indexAll().then( resultado => {
            response.status(HttpStatus.OK).json(resultado);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la obtencion de datos' });
        });
        // return await this.ayudanteService.indexAll();
    }

    @Get('/valid')
    public async index(@Res() response) {
        return await this.distritoService.index().then( resultado => {
            response.status(HttpStatus.OK).json(resultado);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la obtencion de datos' });
        });
    }

    @Get(':id')
    public async show(@Res() response, @Param('id') id) {
        return await this.distritoService.show(id).then( resultado => {
            response.status(HttpStatus.OK).json(resultado);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la obtencion del dato' });
        });
    }

    @Post()
    add(@Body() distrito: Distrito, @Res() response) {
        return this.distritoService.store(distrito).then( respuesta => {
            response.status(HttpStatus.CREATED).json(respuesta);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({mensaje: 'Error al agregar registro'});
        });
    }

    @Put(':id')
    update(@Body() distrito: Distrito, @Param('id') id, @Res() response) {
        return this.distritoService.update(id, distrito).then( respuesta => {
            response.status(HttpStatus.CREATED).json(respuesta);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({mensaje: 'Error al agregar registro'});
        });
    }

    @Delete(':id')
    delete(@Res() response, @Param('id') id) {
        return this.distritoService.destroy(id).then( respuesta => {
            response.status(HttpStatus.CREATED).json(respuesta);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({mensaje: 'Error al agregar registro'});
        });
    }
}
