import { Departamento } from './../../models/departamento.entity';
import { DepartamentoService } from './../../services/departamento/departamento.service';
import { Controller, Get, Res, Param, HttpStatus, Post, Body, Put, Delete, UseGuards } from '@nestjs/common';
import { Roles } from '../../auth/decorators/rol.decorator';
import { RoleGuard } from '../../auth/guards/role.guard';
import { AuthGuard } from '@nestjs/passport';
@Controller('departamento')
export class DepartamentoController {
    constructor(private readonly departamentoService: DepartamentoService) { }

    @Get()
    public async indexAll(@Res() response) {
        return await this.departamentoService.indexAll().then(resultado => {
            response.status(HttpStatus.OK).json(resultado);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la obtencion de datos' });
        });
        // return await this.ayudanteService.indexAll();
    }

    @Get('/valid')
    public async index(@Res() response) {
        return await this.departamentoService.index().then(resultado => {
            response.status(HttpStatus.OK).json(resultado);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la obtencion de datos' });
        });
    }
    @Get(':id')
    public async show(@Res() response, @Param('id') id) {
        return await this.departamentoService.show(id).then(resultado => {
            response.status(HttpStatus.OK).json(resultado);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la obtencion del dato' });
        });
    }

    @Post()
    @Roles('ADMIN', 'SUPERVISOR')
    @UseGuards(AuthGuard('jwt'), RoleGuard)
    add(@Body() departamento: Departamento, @Res() response) {
        return this.departamentoService.store(departamento).then(respuesta => {
            response.status(HttpStatus.CREATED).json(respuesta);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error al agregar registro' });
        });
    }

    @Put(':id')
    @Roles('ADMIN', 'SUPERVISOR')
    @UseGuards(AuthGuard('jwt'), RoleGuard)
    update(@Body() departamento: Departamento, @Param('id') id, @Res() response) {
        return this.departamentoService.update(id, departamento).then(respuesta => {
            response.status(HttpStatus.CREATED).json(respuesta);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error al agregar registro' });
        });
    }

    @Delete(':id')
    @Roles('ADMIN', 'SUPERVISOR')
    @UseGuards(AuthGuard('jwt'), RoleGuard)
    delete(@Res() response, @Param('id') id) {
        return this.departamentoService.destroy(id).then(respuesta => {
            response.status(HttpStatus.CREATED).json(respuesta);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error al agregar registro' });
        });
    }
}
