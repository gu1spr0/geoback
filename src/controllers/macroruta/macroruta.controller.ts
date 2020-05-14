import { Macroruta } from './../../models/macroruta.entity';
import { MacrorutaService } from './../../services/macroruta/macroruta.service';
import { Controller, Get, Res, Param, HttpStatus, Post, Body, Put, Delete } from '@nestjs/common';

@Controller('macroruta')
export class MacrorutaController {
    constructor(private readonly macrorutaService: MacrorutaService) {}

    @Get()
    public async indexAll(@Res() response) {
        return await this.macrorutaService.indexAll().then( resultado => {
            response.status(HttpStatus.OK).json(resultado);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la obtencion de datos' });
        });
        // return await this.ayudanteService.indexAll();
    }

    @Get('/valid')
    public async index(@Res() response) {
        return await this.macrorutaService.index().then( resultado => {
            response.status(HttpStatus.OK).json(resultado);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la obtencion de datos' });
        });
    }

    @Get(':id')
    public async show(@Res() response, @Param('id') id) {
        return await this.macrorutaService.show(id).then( resultado => {
            response.status(HttpStatus.OK).json(resultado);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la obtencion del dato' });
        });
    }

    @Post()
    add(@Body() macroruta: Macroruta, @Res() response) {
        return this.macrorutaService.store(macroruta).then( respuesta => {
            response.status(HttpStatus.CREATED).json(respuesta);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({mensaje: 'Error al agregar registro'});
        });
    }

    @Put(':id')
    update(@Body() macroruta: Macroruta, @Param('id') id, @Res() response) {
        return this.macrorutaService.update(id, macroruta).then( respuesta => {
            response.status(HttpStatus.CREATED).json(respuesta);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({mensaje: 'Error al agregar registro'});
        });
    }

    @Delete(':id')
    delete(@Res() response, @Param('id') id) {
        return this.macrorutaService.destroy(id).then( respuesta => {
            response.status(HttpStatus.CREATED).json(respuesta);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({mensaje: 'Error al agregar registro'});
        });
    }
}
