import { Visitante } from './../../models/visitante.entity';
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class VisitanteService {
    constructor(@Inject('VISITANTE_REPOSITORY') private readonly visitanteRepository: typeof Visitante) { }

    // Lista todos /messages
    async indexAll(): Promise<Visitante[]> {
        return await this.visitanteRepository.findAll<Visitante>({
            attributes: ['ubicacion', 'fecha', 'hora'],
        });
    }
    // async index(): Promise<Ayudante[]> {
    //     return await this.ayudanteRepository.findAll<Ayudante>({
    //         include: [
    //             {model: Persona, include: [{
    //                 model: Departamento, attributes: ['departamento', 'sigla'],
    //             }], attributes: ['cedula', 'nombre', 'paterno', 'materno', 'celular', 'direccion', 'email']},
    //             {model: Vehiculo, attributes: ['placa', 'capacidad', 'unidad', 'marca', 'modelo']},
    //         ],
    //         attributes: ['descripcion', 'valido'],
    //         where: {
    //             valido: 'AC',
    //         },
    //     });
    // }

    // Creacion de registro /messages
    async store(visitante: Visitante): Promise<Visitante> {
        return await this.visitanteRepository.create<Visitante>(visitante);
    }

    // Registro Especifico /messages/{id}
    async show(id): Promise<Visitante> {
        return await this.visitanteRepository.findOne<Visitante>({
            attributes: ['ubicacion', 'fecha', 'hora'],
            where: {
                visitanteId: id,
            },
        });
    }

    // Modificar

    async update(id, nuevo: Visitante): Promise<[number, Visitante[]]> {
        return await this.visitanteRepository.update<Visitante>({
            ubicacion: nuevo.ubicacion,
            fecha: nuevo.fecha,
            hora: nuevo.hora,
        }, {
            where: {
                visitanteId: id,
            },
        });
    }

    // Eliminar

    // async destroy(id): Promise<[number, Ayudante[]]> {
    //     return await this.ayudanteRepository.update<Ayudante>({
    //         valido: 'AN',
    //     }, {
    //         where: {
    //             ayudanteId: id,
    //         },
    //     });
    // }
}
