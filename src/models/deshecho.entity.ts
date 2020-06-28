import { Table, Model, Column, DataType, CreatedAt, UpdatedAt, DeletedAt, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Vehiculo } from './vehiculo.entity';

@Table({
    tableName: 'deshecho',
})
export class Deshecho extends Model<Deshecho> {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
    })
    public deshechoId: number;

    @ForeignKey(() => Vehiculo)
    @Column
    vehiculoId: number;

    @BelongsTo(() => Vehiculo)
    vehiculo: Vehiculo;

    @Column({
        type: DataType.STRING(30),
        allowNull: true,
    })
    public descripcion: string;

    @Column({
        type: DataType.DECIMAL(10, 2),
        allowNull: false,
    })
    public cantidad: number;

    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    public fecha: Date;

    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    public hora: Date;

    @Column({
        type: DataType.STRING(2),
        allowNull: false,
    })
    public valido: string;

    @CreatedAt
    public creacion: Date;

    @UpdatedAt
    public modificacion: Date;
}
