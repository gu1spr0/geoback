import { Visitante } from './../../models/visitante.entity';
import { VisitanteService } from './../../services/visitante/visitante.service';
import { Controller, Get, Res, Param, HttpStatus, Post, Body, Put, Delete } from '@nestjs/common';

@Controller('visitante')
export class VisitanteController {
    constructor(private readonly visitanteService: VisitanteService) {}

    @Get()
    public async indexAll(@Res() response) {
        return await this.visitanteService.indexAll().then( resultado => {
            response.status(HttpStatus.OK).json(resultado);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la obtencion de datos' });
        });
        // return await this.ayudanteService.indexAll();
    }

    // @Get('/valid')
    // public async index(@Res() response) {
    //     return await this.visitanteService.index().then( resultado => {
    //         response.status(HttpStatus.OK).json(resultado);
    //     }).catch( () => {
    //         response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la obtencion de datos' });
    //     });
    // }

    @Get(':id')
    public async show(@Res() response, @Param('id') id) {
        return await this.visitanteService.show(id).then( resultado => {
            response.status(HttpStatus.OK).json(resultado);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la obtencion del dato' });
        });
    }

    @Post()
    add(@Body() visitante: Visitante, @Res() response) {
        return this.visitanteService.store(visitante).then( respuesta => {
            response.status(HttpStatus.CREATED).json(respuesta);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({mensaje: 'Error al agregar registro'});
        });
    }

    @Put(':id')
    update(@Body() visitante: Visitante, @Param('id') id, @Res() response) {
        return this.visitanteService.update(id, visitante).then( respuesta => {
            response.status(HttpStatus.CREATED).json(respuesta);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({mensaje: 'Error al agregar registro'});
        });
    }

    // @Delete(':id')
    // delete(@Res() response, @Param('id') id) {
    //     return this.visitanteService.destroy(id).then( respuesta => {
    //         response.status(HttpStatus.CREATED).json(respuesta);
    //     }).catch( () => {
    //         response.status(HttpStatus.FORBIDDEN).json({mensaje: 'Error al agregar registro'});
    //     });
    // }
}
