import { Puntos } from './../../models/puntos.entity';
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class PuntosService {
    constructor(
        @Inject('PUNTOS_REPOSITORY') private readonly puntosRepository: typeof Puntos,
        @Inject('SEQUELIZE') private readonly sequelize) { }

    // Lista todos /messages
    async indexAll(): Promise<Puntos[]> {
        return await this.puntosRepository.findAll<Puntos>({
            attributes: ['puntoId', 'fecha', 'hora', 'valido', 'punto'],
        });
    }

    async index(): Promise<Puntos[]> {
        return await this.puntosRepository.findAll<Puntos>({
            attributes: ['puntoId', 'fecha', 'hora', 'valido', 'punto'],
            where: {
                valido: 'AC',
            },
        });
    }
    // Creacion de registro /messages
    async store(puntos: Puntos): Promise<Puntos> {
        console.log(puntos);
        const t = await this.sequelize.transaction();
        try {
            const pt = await this.puntosRepository.create<Puntos>(puntos, { transaction: t });
            await t.commit();
            return pt;
        } catch (error) {
            await t.rollback();
            console.log(error);
            throw new Error();
        }
    }

    // Eliminar

    async destroy(id): Promise<[number, Puntos[]]> {
        const t = await this.sequelize.transaction();
        try {
            const p = await this.puntosRepository.update<Puntos>({
                valido: 'AN',
            }, {
                where: {
                    puntoId: id,
                },
                transaction: t,
            });
            await t.commit();
            return p;
        } catch (error) {
            await t.rollback();
            throw new Error();
        }
    }

    async update(id): Promise<[number, Puntos[]]> {
        const t = await this.sequelize.transaction();
        try {
            const p = await this.puntosRepository.update<Puntos>({
                valido: 'AN',
            }, {
                where: {
                    puntoId: id,
                    valido: 'AC',
                },
                transaction: t,
            });
            await t.commit();
            return p;
        } catch (error) {
            await t.rollback();
            throw new Error();
        }
    }
}
