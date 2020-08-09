import { Persona } from './../../models/persona.entity';
import { PersonaService } from './../../services/persona/persona.service';
import { Controller, Post, Get, Body, Res, Req, HttpStatus, Put, Param, Delete, UseGuards } from '@nestjs/common';
import { Roles } from './../../auth/decorators/rol.decorator';
import { AuthGuard } from '@nestjs/passport';
import { RoleGuard } from '../../auth/guards/role.guard';
@Controller('persona')
@Roles('ADMIN', 'SUPERVISOR')
@UseGuards(AuthGuard('jwt'), RoleGuard)
export class PersonaController {
    constructor(private readonly personaService: PersonaService) { }

    @Get()
    public async indexAll(@Res() response) {
        return await this.personaService.indexAll().then(personas => {
            response.status(HttpStatus.OK).json(personas);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la obtencion de datos' });
        });
        // return await this.ayudanteService.indexAll();
    }

    @Get('/valid')
    public async index(@Res() response) {
        return await this.personaService.index().then(personas => {
            response.status(HttpStatus.OK).json(personas);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la obtencion de datos' });
        });
    }

    @Get(':id')
    public async show(@Res() response, @Param('id') id) {
        return await this.personaService.show(id).then(persona => {
            response.status(HttpStatus.OK).json(persona);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la obtencion del dato' });
        });
    }

    @Post()
    add(@Body() persona: Persona, @Res() response) {
        return this.personaService.store(persona).then(respuesta => {
            response.status(HttpStatus.CREATED).json(respuesta);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error al agregar registro' });
        });
    }

    @Put(':id')
    update(@Body() persona: Persona, @Param('id') id, @Res() response) {
        return this.personaService.update(id, persona).then(respuesta => {
            response.status(HttpStatus.CREATED).json(respuesta);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error al agregar registro' });
        });
    }

    @Delete(':id')
    delete(@Res() response, @Param('id') id) {
        return this.personaService.destroy(id).then(respuesta => {
            response.status(HttpStatus.CREATED).json(respuesta);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error al agregar registro' });
        });
    }

}
