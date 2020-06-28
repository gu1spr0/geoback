import { Vehiculo } from './../../models/vehiculo.entity';
import { VehiculoService } from './../../services/vehiculo/vehiculo.service';
import { Controller, Get, Res, Param, HttpStatus, Post, Body, Put, Delete } from '@nestjs/common';

@Controller('vehiculo')
export class VehiculoController {
    constructor(private readonly vehiculoService: VehiculoService) { }

    @Get()
    public async indexAll(@Res() response) {
        return await this.vehiculoService.indexAll().then(resultado => {
            response.status(HttpStatus.OK).json(resultado);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la obtencion de datos' });
        });
        // return await this.ayudanteService.indexAll();
    }

    @Get('/valid')
    public async index(@Res() response) {
        return await this.vehiculoService.index().then(resultado => {
            response.status(HttpStatus.OK).json(resultado);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la obtencion de datos' });
        });
    }

    @Get(':id')
    public async show(@Res() response, @Param('id') id) {
        return await this.vehiculoService.show(id).then(resultado => {
            response.status(HttpStatus.OK).json(resultado);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la obtencion del dato' });
        });
    }

    @Post()
    add(@Body() vehiculo: Vehiculo, @Res() response) {
        return this.vehiculoService.store(vehiculo).then(respuesta => {
            response.status(HttpStatus.CREATED).json(respuesta);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error al agregar registro' });
        });
    }

    @Put(':id')
    update(@Body() vehiculo: Vehiculo, @Param('id') id, @Res() response) {
        return this.vehiculoService.update(id, vehiculo).then(respuesta => {
            response.status(HttpStatus.CREATED).json(respuesta);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error al agregar registro' });
        });
    }

    @Delete(':id')
    delete(@Res() response, @Param('id') id) {
        return this.vehiculoService.destroy(id).then(respuesta => {
            response.status(HttpStatus.CREATED).json(respuesta);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error al agregar registro' });
        });
    }
}
