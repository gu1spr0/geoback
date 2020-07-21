import { Table, Column, Model, DataType, HasOne, CreatedAt, UpdatedAt, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Horario } from './horario.entity';
import { Vehiculo } from './vehiculo.entity';
import { Distrito } from './distrito.entity';
@Table({
    tableName: 'ruta',
})
export class Ruta extends Model<Ruta> {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
    })
    public rutaId: number;

    @Column({
        type: DataType.GEOMETRY('LINE', 3857),
        allowNull: false,
    })
    public linea: any;

    @Column({
        type: DataType.STRING(2),
        allowNull: false,
    })
    public valido: string;

    @CreatedAt
    public creacion: Date;

    @UpdatedAt
    public modificacion: Date;

    @ForeignKey(() => Horario)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    public horarioId: number;

    @ForeignKey(() => Distrito)
    @Column
    distritoId: number;

    @BelongsTo(() => Distrito)
    destrito: Distrito;

    @ForeignKey(() => Vehiculo)
    @Column
    vehiculoId: number;

    @BelongsTo(() => Vehiculo)
    vehiculo: Vehiculo;

}
