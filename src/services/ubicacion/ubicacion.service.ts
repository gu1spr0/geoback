import { Dispositivo } from './../../models/dispositivo.entity';
import { Ubicacion } from './../../models/ubicacion.entity';
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class UbicacionService {
    constructor(@Inject('UBICACION_REPOSITORY') private readonly ubicacionRepository: typeof Ubicacion) { }

    // Lista todos /messages
    async indexAll(): Promise<Ubicacion[]> {
        return await this.ubicacionRepository.findAll<Ubicacion>({
            include: [
                {
                    model: Dispositivo,
                    attributes: [
                        'dispositivoId',
                        'nombre',
                        'descripcion',
                        'marca',
                        'modelo',
                        'sub',
                        'pub',
                        'ip',
                        'mac',
                        'valido',
                    ],

                },
            ],
            attributes: [
                'ubicacionId',
                'fecha',
                'hora',
                'linea',
            ],
        });
    }
    async index(): Promise<Ubicacion[]> {
        return await this.ubicacionRepository.findAll<Ubicacion>({
            include: [
                {
                    model: Dispositivo,
                    attributes: [
                        'dispositivoId',
                        'nombre',
                        'descripcion',
                        'marca',
                        'modelo',
                        'sub',
                        'pub',
                        'ip',
                        'mac',
                        'valido',
                    ],
                    where: {
                        valido: 'AC',
                    },

                },
            ],
            attributes: [
                'ubicacionId',
                'fecha',
                'hora',
                'linea',
            ],
        });
    }

    // Creacion de registro /messages
    async store(ubicacion: Ubicacion): Promise<Ubicacion> {
        return await this.ubicacionRepository.create<Ubicacion>(ubicacion);
    }

    // Registro Especifico /messages/{id}
    async show(id): Promise<Ubicacion> {
        return await this.ubicacionRepository.findOne<Ubicacion>({
            include: [
                {
                    model: Dispositivo,
                    attributes: [
                        'dispositivoId',
                        'nombre',
                        'descripcion',
                        'marca',
                        'modelo',
                        'sub',
                        'pub',
                        'ip',
                        'mac',
                        'valido',
                    ],
                    where: {
                        valido: 'AC',
                    },

                },
            ],
            attributes: [
                'ubicacionId',
                'fecha',
                'hora',
                'linea',
            ],
            where: {
                ubicacionId: id,
            },
        });
    }

    // Modificar

    async update(id, nuevo: Ubicacion): Promise<[number, Ubicacion[]]> {
        return await this.ubicacionRepository.update<Ubicacion>({
            fecha: nuevo.fecha,
            hora: nuevo.hora,
            linea: nuevo.linea,
        }, {
            where: {
                ubicacionId: id,
            },
        });
    }

    // Eliminar

    // async destroy(id): Promise<[number, Ubicacion[]]> {
    //     return await this.ubicacionRepository.update<Ubicacion>({
    //         valido: 'AN',
    //     }, {
    //         where: {
    //             ayudanteId: id,
    //         },
    //     });
    // }
}
