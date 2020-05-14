import { Departamento } from './../../models/departamento.entity';
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class DepartamentoService {
    constructor(@Inject('DEPARTAMENTO_REPOSITORY') private readonly departamentoRepository: typeof Departamento) { }

    // Lista todos /messages
    async indexAll(): Promise<Departamento[]> {
        return await this.departamentoRepository.findAll<Departamento>({
            attributes: ['departamento', 'sigla', 'valido'],
        });
    }
    async index(): Promise<Departamento[]> {
        return await this.departamentoRepository.findAll<Departamento>({
            attributes: ['departamento', 'sigla', 'valido'],
            where: {
                valido: 'AC',
            },
        });
    }

    // Creacion de registro /messages
    async store(departamento: Departamento): Promise<Departamento> {
        return await this.departamentoRepository.create<Departamento>(departamento);
    }

    // Registro Especifico /messages/{id}
    async show(id): Promise<Departamento> {
        return await this.departamentoRepository.findOne<Departamento>({
            attributes: ['departamento', 'sigla', 'valido'],
            where: {
                valido: 'AC',
                departamentoId: id,
            },
        });
    }

    // Modificar

    async update(id, nuevo: Departamento): Promise<[number, Departamento[]]> {
        return await this.departamentoRepository.update<Departamento>({
            departamento: nuevo.departamento,
            sigla: nuevo.sigla,
        }, {
            where: {
                departamentoId: id,
            },
        });
    }

    // Eliminar

    async destroy(id): Promise<[number, Departamento[]]> {
        return await this.departamentoRepository.update<Departamento>({
            valido: 'AN',
        }, {
            where: {
                departamentoId: id,
            },
        });
    }
}
