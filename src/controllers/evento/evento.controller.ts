import { Evento } from './../../models/evento.entity';
import { EventoService } from './../../services/evento/evento.service';
import { Controller, Get, Param, Res, HttpStatus, Post, Body, Put, Delete, UseGuards } from '@nestjs/common';
import { Roles } from '../../auth/decorators/rol.decorator';
import { AuthGuard } from '@nestjs/passport';
import { RoleGuard } from '../../auth/guards/role.guard';

@Controller('evento')
@Roles('ADMIN', 'SUPERVISOR')
@UseGuards(AuthGuard('jwt'), RoleGuard)
export class EventoController {
    constructor(private readonly eventoService: EventoService) { }

    @Get()
    public async indexAll(@Res() response) {
        return await this.eventoService.indexAll().then(resultado => {
            response.status(HttpStatus.OK).json(resultado);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la obtencion de datos' });
        });
        // return await this.ayudanteService.indexAll();
    }

    @Get('/valid')
    public async index(@Res() response) {
        return await this.eventoService.index().then(resultado => {
            response.status(HttpStatus.OK).json(resultado);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la obtencion de datos' });
        });
    }

    @Get(':id')
    public async show(@Res() response, @Param('id') id) {
        return await this.eventoService.show(id).then(resultado => {
            response.status(HttpStatus.OK).json(resultado);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la obtencion del dato' });
        });
    }

    @Post()
    add(@Body() evento: Evento, @Res() response) {
        return this.eventoService.store(evento).then(respuesta => {
            response.status(HttpStatus.CREATED).json(respuesta);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error al agregar registro' });
        });
    }

    @Put(':id')
    update(@Body() evento: Evento, @Param('id') id, @Res() response) {
        return this.eventoService.update(id, evento).then(respuesta => {
            response.status(HttpStatus.CREATED).json(respuesta);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error al agregar registro' });
        });
    }

    @Delete(':id')
    delete(@Res() response, @Param('id') id) {
        return this.eventoService.destroy(id).then(respuesta => {
            response.status(HttpStatus.CREATED).json(respuesta);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error al agregar registro' });
        });
    }
}
