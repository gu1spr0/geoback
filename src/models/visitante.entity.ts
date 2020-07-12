import { VisitanteVehiculo } from './visitante_vehiculo.entity';
import { Table, Column, Model, DataType, HasMany, CreatedAt, UpdatedAt } from 'sequelize-typescript';

@Table({
    tableName: 'visitante',
})
export class Visitante extends Model<Visitante> {
    @Column({
        type: DataType.BIGINT,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
    })
    public visitanteId: number;

    @Column({
        type: DataType.GEOMETRY('POINT', 3857),
        allowNull: false,
    })
    public ubicacion: any;

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

    @HasMany(() => VisitanteVehiculo)
    public visitantesVehiculos: VisitanteVehiculo[];

    @CreatedAt
    public creacion: Date;

    @UpdatedAt
    public modificacion: Date;
}
