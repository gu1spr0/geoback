import { Table, Model, Column, ForeignKey, BelongsTo, DataType, CreatedAt, UpdatedAt } from 'sequelize-typescript';
import { Vehiculo } from './vehiculo.entity';
import { Visitante } from './visitante.entity';

@Table({
    tableName: 'visitante_vehiculo',
})
export class VisitanteVehiculo extends Model<VisitanteVehiculo> {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
    })
    public visitanteVehiculoId: number;

    @ForeignKey( () => Visitante )
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    public visitanteId: number;

    @BelongsTo( () => Visitante )
    public visitante: Visitante;

    @ForeignKey( () => Vehiculo )
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    public vehiculoId: number;

    @BelongsTo( () => Visitante )
    public vehiculo: Vehiculo;

    @CreatedAt
    public creacion: Date;

    @UpdatedAt
    public modificacion: Date;
}
