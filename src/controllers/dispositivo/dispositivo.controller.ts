import { Dispositivo } from './../../models/dispositivo.entity';
import { DispositivoService } from './../../services/dispositivo/dispositivo.service';
import { Controller, Get, Res, Param, HttpStatus, Post, Body, Put, Delete, UseGuards } from '@nestjs/common';
import { Roles } from '../../auth/decorators/rol.decorator';
import { AuthGuard } from '@nestjs/passport';
import { RoleGuard } from '../../auth/guards/role.guard';

@Controller('dispositivo')
export class DispositivoController {
    constructor(private readonly dispositivoService: DispositivoService) { }

    @Get()
    public async indexAll(@Res() response) {
        return await this.dispositivoService.indexAll().then(resultado => {
            response.status(HttpStatus.OK).json(resultado);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la obtencion de datos' });
        });
        // return await this.ayudanteService.indexAll();
    }

    @Get('/valid')
    public async index(@Res() response) {
        return await this.dispositivoService.index().then(resultado => {
            response.status(HttpStatus.OK).json(resultado);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la obtencion de datos' });
        });
    }

    @Get(':id')
    public async show(@Res() response, @Param('id') id) {
        return await this.dispositivoService.show(id).then(resultado => {
            response.status(HttpStatus.OK).json(resultado);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la obtencion del dato' });
        });
    }
    @Get('iden/:id')
    public async findName(@Res() response, @Param('id') id) {
        return await this.dispositivoService.findName(id).then(resultado => {
            response.status(HttpStatus.OK).json(resultado);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la obtencion del dato' });
        });
    }

    @Post()
    @Roles('ADMIN', 'SUPERVISOR')
    @UseGuards(AuthGuard('jwt'), RoleGuard)
    add(@Body() dispositivo: Dispositivo, @Res() response) {
        return this.dispositivoService.store(dispositivo).then(respuesta => {
            response.status(HttpStatus.CREATED).json(respuesta);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error al agregar registro' });
        });
    }

    @Put(':id')
    @Roles('ADMIN', 'SUPERVISOR')
    @UseGuards(AuthGuard('jwt'), RoleGuard)
    update(@Body() dispositivo: Dispositivo, @Param('id') id, @Res() response) {
        return this.dispositivoService.update(id, dispositivo).then(respuesta => {
            response.status(HttpStatus.CREATED).json(respuesta);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error al agregar registro' });
        });
    }

    @Delete(':id')
    @Roles('ADMIN', 'SUPERVISOR')
    @UseGuards(AuthGuard('jwt'), RoleGuard)
    delete(@Res() response, @Param('id') id) {
        return this.dispositivoService.destroy(id).then(respuesta => {
            response.status(HttpStatus.CREATED).json(respuesta);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error al agregar registro' });
        });
    }
}
