import { Table, Column, DataType, Model, HasMany, CreatedAt, UpdatedAt, DeletedAt, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { Ayudante } from './ayudante.entity';
import { Dispositivo } from './dispositivo.entity';
import { Conductor } from './conductor.entity';
import { Deshecho } from './deshecho.entity';
import { VisitanteVehiculo } from './visitante_vehiculo.entity';
import { Ruta } from './ruta.entity';

@Table({
    tableName: 'vehiculo',
})
export class Vehiculo extends Model<Vehiculo> {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
    })
    public vehiculoId: number;

    @ForeignKey(() => Dispositivo)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    public dispositivoId: number;

    @BelongsTo(() => Dispositivo)
    dispositivo: Dispositivo;

    @ForeignKey(() => Conductor)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    conductorId: number;

    @BelongsTo(() => Conductor)
    conductor: Conductor;

    @HasMany(() => Ayudante)
    ayudantes: Ayudante[];

    @Column({
        type: DataType.STRING(10),
        allowNull: false,
    })
    public placa: string;

    @Column({
        type: DataType.DECIMAL(5, 1),
        allowNull: false,
    })
    public capacidad: number;

    @Column({
        type: DataType.STRING(5),
        allowNull: false,
    })
    public unidad: string;

    @Column({
        type: DataType.STRING(30),
        allowNull: false,
    })
    public marca: string;

    @Column({
        type: DataType.STRING(30),
        allowNull: false,
    })
    public modelo: string;

    @Column({
        type: DataType.STRING(2),
        allowNull: false,
    })
    public valido: string;

    @HasMany(() => VisitanteVehiculo)
    visitantesVehiculos: VisitanteVehiculo[];

    @HasMany(() => Deshecho)
    deshechos: Deshecho[];

    @HasMany(() => Ruta)
    rutas: Ruta[];

    @CreatedAt
    creacion: Date;

    @UpdatedAt
    modificacion: Date;
}
