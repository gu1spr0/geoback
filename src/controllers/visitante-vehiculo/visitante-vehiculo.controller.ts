import { VisitanteVehiculo } from './../../models/visitante_vehiculo.entity';
import { VisitanteVehiculoService } from './../../services/visitante-vehiculo/visitante-vehiculo.service';
import { Controller, Get, Res, Param, HttpStatus, Post, Body, Put, Delete, UseGuards } from '@nestjs/common';
import { Roles } from '../../auth/decorators/rol.decorator';
import { AuthGuard } from '@nestjs/passport';
import { RoleGuard } from '../../auth/guards/role.guard';

@Controller('visitante-vehiculo')
@Roles('ADMIN', 'SUPERVISOR')
@UseGuards(AuthGuard('jwt'), RoleGuard)
export class VisitanteVehiculoController {
    constructor(private readonly visitanteVehiculoService: VisitanteVehiculoService) { }

    @Get()
    public async indexAll(@Res() response) {
        return await this.visitanteVehiculoService.indexAll().then(resultado => {
            response.status(HttpStatus.OK).json(resultado);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la obtencion de datos' });
        });
        // return await this.ayudanteService.indexAll();
    }

    // @Get('/valid')
    // public async index(@Res() response) {
    //     return await this.visitanteVehiculoService.index().then( resultado => {
    //         response.status(HttpStatus.OK).json(resultado);
    //     }).catch( () => {
    //         response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la obtencion de datos' });
    //     });
    // }

    @Get(':id')
    public async show(@Res() response, @Param('id') id) {
        return await this.visitanteVehiculoService.show(id).then(resultado => {
            response.status(HttpStatus.OK).json(resultado);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la obtencion del dato' });
        });
    }

    @Post()
    add(@Body() visitanteVehiculo: VisitanteVehiculo, @Res() response) {
        return this.visitanteVehiculoService.store(visitanteVehiculo).then(respuesta => {
            response.status(HttpStatus.CREATED).json(respuesta);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error al agregar registro' });
        });
    }

    // @Put(':id')
    // update(@Body() visitanteVehiculo: VisitanteVehiculo, @Param('id') id, @Res() response) {
    //     return this.visitanteVehiculoService.update(id, departamento).then( respuesta => {
    //         response.status(HttpStatus.CREATED).json(respuesta);
    //     }).catch( () => {
    //         response.status(HttpStatus.FORBIDDEN).json({mensaje: 'Error al agregar registro'});
    //     });
    // }

    // @Delete(':id')
    // delete(@Res() response, @Param('id') id) {
    //     return this.visitanteVehiculoService.destroy(id).then( respuesta => {
    //         response.status(HttpStatus.CREATED).json(respuesta);
    //     }).catch( () => {
    //         response.status(HttpStatus.FORBIDDEN).json({mensaje: 'Error al agregar registro'});
    //     });
    // }
}
