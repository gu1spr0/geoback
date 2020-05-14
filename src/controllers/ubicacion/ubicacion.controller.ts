import { Ubicacion } from './../../models/ubicacion.entity';
import { UbicacionService } from './../../services/ubicacion/ubicacion.service';
import { Controller, Get, Res, Param, HttpStatus, Post, Body, Put, Delete } from '@nestjs/common';

@Controller('ubicacion')
export class UbicacionController {
    constructor(private readonly ubicacionService: UbicacionService) {}

    @Get()
    public async indexAll(@Res() response) {
        return await this.ubicacionService.indexAll().then( resultado => {
            response.status(HttpStatus.OK).json(resultado);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la obtencion de datos' });
        });
        // return await this.ayudanteService.indexAll();
    }

    @Get('/valid')
    public async index(@Res() response) {
        return await this.ubicacionService.index().then( resultado => {
            response.status(HttpStatus.OK).json(resultado);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la obtencion de datos' });
        });
    }

    @Get(':id')
    public async show(@Res() response, @Param('id') id) {
        return await this.ubicacionService.show(id).then( resultado => {
            response.status(HttpStatus.OK).json(resultado);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la obtencion del dato' });
        });
    }

    @Post()
    add(@Body() ubicacion: Ubicacion, @Res() response) {
        return this.ubicacionService.store(ubicacion).then( respuesta => {
            response.status(HttpStatus.CREATED).json(respuesta);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({mensaje: 'Error al agregar registro'});
        });
    }

    @Put(':id')
    update(@Body() ubicacion: Ubicacion, @Param('id') id, @Res() response) {
        return this.ubicacionService.update(id, ubicacion).then( respuesta => {
            response.status(HttpStatus.CREATED).json(respuesta);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({mensaje: 'Error al agregar registro'});
        });
    }

    // @Delete(':id')
    // delete(@Res() response, @Param('id') id) {
    //     return this.ubicacionService.destroy(id).then( respuesta => {
    //         response.status(HttpStatus.CREATED).json(respuesta);
    //     }).catch( () => {
    //         response.status(HttpStatus.FORBIDDEN).json({mensaje: 'Error al agregar registro'});
    //     });
    // }
}
