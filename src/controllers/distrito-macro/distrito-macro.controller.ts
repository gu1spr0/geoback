import { DistritoMacro } from './../../models/distrito_macro.entity';
import { DistritoMacroService } from './../../services/distrito-macro/distrito-macro.service';
import { Controller, Get, Res, Param, HttpStatus, Post, Body, Put, Delete } from '@nestjs/common';

@Controller('distrito-macro')
export class DistritoMacroController {
    constructor(private readonly distritoMacroService: DistritoMacroService) {}

    @Get()
    public async indexAll(@Res() response) {
        return await this.distritoMacroService.indexAll().then( resultado => {
            response.status(HttpStatus.OK).json(resultado);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la obtencion de datos' });
        });
        // return await this.ayudanteService.indexAll();
    }

    @Get('/valid')
    public async index(@Res() response) {
        return await this.distritoMacroService.index().then( resultado => {
            response.status(HttpStatus.OK).json(resultado);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la obtencion de datos' });
        });
    }

    @Get(':id')
    public async show(@Res() response, @Param('id') id) {
        return await this.distritoMacroService.show(id).then( resultado => {
            response.status(HttpStatus.OK).json(resultado);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la obtencion del dato' });
        });
    }

    @Post()
    add(@Body() distritoMacro: DistritoMacro, @Res() response) {
        return this.distritoMacroService.store(distritoMacro).then( respuesta => {
            response.status(HttpStatus.CREATED).json(respuesta);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({mensaje: 'Error al agregar registro'});
        });
    }

    // @Put(':id')
    // update(@Body() distritoMacro: DistritoMacro, @Param('id') id, @Res() response) {
    //     return this.distritoMacroService.update(id, distritoMacro).then( respuesta => {
    //         response.status(HttpStatus.CREATED).json(respuesta);
    //     }).catch( () => {
    //         response.status(HttpStatus.FORBIDDEN).json({mensaje: 'Error al agregar registro'});
    //     });
    // }

    // @Delete(':id')
    // delete(@Res() response, @Param('id') id) {
    //     return this.distritoMacroService.destroy(id).then( respuesta => {
    //         response.status(HttpStatus.CREATED).json(respuesta);
    //     }).catch( () => {
    //         response.status(HttpStatus.FORBIDDEN).json({mensaje: 'Error al agregar registro'});
    //     });
    // }
}
