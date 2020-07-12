import { Dispositivo } from './dispositivo.entity';
import { Table, Column, Model, DataType, CreatedAt, UpdatedAt, DeletedAt, ForeignKey, BelongsTo } from 'sequelize-typescript';

@Table({
    tableName: 'ubicacion',
})
export class Ubicacion extends Model<Ubicacion> {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
    })
    public ubicacionId: number;

    @Column({
        type: DataType.DATEONLY,
        allowNull: false,
    })
    public fecha: Date;

    @Column({
        type: DataType.TIME,
        allowNull: false,
    })
    public hora: Date;

    @Column({
        type: DataType.GEOMETRY('LINE', 3857),
        allowNull: false,
    })
    public linea: any;

    @ForeignKey(() => Dispositivo)
    @Column
    dispositivoId: number;

    @BelongsTo(() => Dispositivo)
    dispositivo: Dispositivo;

    @CreatedAt
    public creacion: Date;

    @UpdatedAt
    public modificacion: Date;
}
