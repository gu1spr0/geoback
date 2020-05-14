import { Persona } from './persona.entity';
import { Table, Column, Model, DataType, HasOne, CreatedAt, UpdatedAt } from 'sequelize-typescript';

@Table({
    tableName: 'departamento',
})
export class Departamento extends Model<Departamento> {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
    })
    public departamentoId: number;

    @Column({
        type: DataType.STRING(30),
        allowNull: false,
    })
    public departamento: string;

    @Column({
        type: DataType.STRING(5),
        allowNull: false,
    })
    public sigla: string;

    @Column({
        type: DataType.STRING(2),
        allowNull: false,
    })
    public valido: string;

    @HasOne( () => Persona )
    public persona: Persona;

    @CreatedAt
    public creacion: Date;

    @UpdatedAt
    public modificacion: Date;
}
