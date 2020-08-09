import { Horario } from './../../models/horario.entity';
import { Controller, Get, Res, Param, HttpStatus, Post, Body, Put, Delete, UseGuards } from '@nestjs/common';
import { HorarioService } from './../../services/horario/horario.service';
import { Roles } from '../../auth/decorators/rol.decorator';
import { AuthGuard } from '@nestjs/passport';
import { RoleGuard } from '../../auth/guards/role.guard';

@Controller('horario')
@Roles('ADMIN', 'SUPERVISOR')
@UseGuards(AuthGuard('jwt'), RoleGuard)
export class HorarioController {
    constructor(private readonly horarioService: HorarioService) { }

    @Get()
    public async indexAll(@Res() response) {
        return await this.horarioService.indexAll().then(resultado => {
            response.status(HttpStatus.OK).json(resultado);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la obtencion de datos' });
        });
        // return await this.ayudanteService.indexAll();
    }

    @Get('/valid')
    public async index(@Res() response) {
        return await this.horarioService.index().then(resultado => {
            response.status(HttpStatus.OK).json(resultado);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la obtencion de datos' });
        });
    }

    @Get(':id')
    public async show(@Res() response, @Param('id') id) {
        return await this.horarioService.show(id).then(resultado => {
            response.status(HttpStatus.OK).json(resultado);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la obtencion del dato' });
        });
    }

    @Post()
    add(@Body() horario: Horario, @Res() response) {
        return this.horarioService.store(horario).then(respuesta => {
            response.status(HttpStatus.CREATED).json(respuesta);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error al agregar registro' });
        });
    }

    @Put(':id')
    update(@Body() horario: Horario, @Param('id') id, @Res() response) {
        return this.horarioService.update(id, horario).then(respuesta => {
            response.status(HttpStatus.CREATED).json(respuesta);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error al agregar registro' });
        });
    }

    @Delete(':id')
    delete(@Res() response, @Param('id') id) {
        return this.horarioService.destroy(id).then(respuesta => {
            response.status(HttpStatus.CREATED).json(respuesta);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error al agregar registro' });
        });
    }
}
