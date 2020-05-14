import { Deshecho } from './../../models/deshecho.entity';
import { DeshechoService } from './../../services/deshecho/deshecho.service';
import { Controller, Get, Res, Param, HttpStatus, Post, Body, Put, Delete } from '@nestjs/common';

@Controller('deshecho')
export class DeshechoController {
    constructor(private readonly deshechoService: DeshechoService) {}

    @Get()
    public async indexAll(@Res() response) {
        return await this.deshechoService.indexAll().then( resultado => {
            response.status(HttpStatus.OK).json(resultado);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la obtencion de datos' });
        });
        // return await this.ayudanteService.indexAll();
    }

    @Get('/valid')
    public async index(@Res() response) {
        return await this.deshechoService.index().then( resultado => {
            response.status(HttpStatus.OK).json(resultado);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la obtencion de datos' });
        });
    }

    @Get(':id')
    public async show(@Res() response, @Param('id') id) {
        return await this.deshechoService.show(id).then( resultado => {
            response.status(HttpStatus.OK).json(resultado);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la obtencion del dato' });
        });
    }

    @Post()
    add(@Body() deshecho: Deshecho, @Res() response) {
        return this.deshechoService.store(deshecho).then( respuesta => {
            response.status(HttpStatus.CREATED).json(respuesta);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({mensaje: 'Error al agregar registro'});
        });
    }

    @Put(':id')
    update(@Body() deshecho: Deshecho, @Param('id') id, @Res() response) {
        return this.deshechoService.update(id, deshecho).then( respuesta => {
            response.status(HttpStatus.CREATED).json(respuesta);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({mensaje: 'Error al agregar registro'});
        });
    }

    @Delete(':id')
    delete(@Res() response, @Param('id') id) {
        return this.deshechoService.destroy(id).then( respuesta => {
            response.status(HttpStatus.CREATED).json(respuesta);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({mensaje: 'Error al agregar registro'});
        });
    }
}
