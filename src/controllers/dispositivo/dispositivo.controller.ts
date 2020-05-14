import { Dispositivo } from './../../models/dispositivo.entity';
import { DispositivoService } from './../../services/dispositivo/dispositivo.service';
import { Controller, Get, Res, Param, HttpStatus, Post, Body, Put, Delete } from '@nestjs/common';

@Controller('dispositivo')
export class DispositivoController {
    constructor(private readonly dispositivoService: DispositivoService) {}

    @Get()
    public async indexAll(@Res() response) {
        return await this.dispositivoService.indexAll().then( resultado => {
            response.status(HttpStatus.OK).json(resultado);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la obtencion de datos' });
        });
        // return await this.ayudanteService.indexAll();
    }

    @Get('/valid')
    public async index(@Res() response) {
        return await this.dispositivoService.index().then( resultado => {
            response.status(HttpStatus.OK).json(resultado);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la obtencion de datos' });
        });
    }

    @Get(':id')
    public async show(@Res() response, @Param('id') id) {
        return await this.dispositivoService.show(id).then( resultado => {
            response.status(HttpStatus.OK).json(resultado);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la obtencion del dato' });
        });
    }

    @Post()
    add(@Body() dispositivo: Dispositivo, @Res() response) {
        return this.dispositivoService.store(dispositivo).then( respuesta => {
            response.status(HttpStatus.CREATED).json(respuesta);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({mensaje: 'Error al agregar registro'});
        });
    }

    @Put(':id')
    update(@Body() dispositivo: Dispositivo, @Param('id') id, @Res() response) {
        return this.dispositivoService.update(id, dispositivo).then( respuesta => {
            response.status(HttpStatus.CREATED).json(respuesta);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({mensaje: 'Error al agregar registro'});
        });
    }

    @Delete(':id')
    delete(@Res() response, @Param('id') id) {
        return this.dispositivoService.destroy(id).then( respuesta => {
            response.status(HttpStatus.CREATED).json(respuesta);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({mensaje: 'Error al agregar registro'});
        });
    }
}
