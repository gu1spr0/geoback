import { Ubicacion } from './ubicacion.entity';
import { Vehiculo } from './vehiculo.entity';
import { Table, Model, Column, DataType, HasOne, CreatedAt, UpdatedAt, DeletedAt, HasMany } from 'sequelize-typescript';

@Table({
    tableName: 'dispositivo',
})
export class Dispositivo extends Model<Dispositivo> {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
    })
    public dispositivoId: number;

    @HasOne(() => Vehiculo)
    public vehiculo: Vehiculo;

    @HasMany(() => Ubicacion)
    public ubicaciones: Ubicacion[];

    @Column({
        type: DataType.STRING(8),
        allowNull: false,
    })
    public nombre: string;

    @Column({
        type: DataType.STRING(30),
        allowNull: true,
    })
    public descripcion: string;

    @Column({
        type: DataType.STRING(20),
        allowNull: false,
    })
    public marca: string;

    @Column({
        type: DataType.STRING(20),
        allowNull: false,
    })
    public modelo: string;

    @Column({
        type: DataType.STRING(10),
        allowNull: false,
    })
    public sub: string;

    @Column({
        type: DataType.STRING(10),
        allowNull: false,
    })
    public pub: string;

    @Column({
        type: DataType.STRING(15),
        allowNull: false,
    })
    public ip: string;

    // @Column({
    //     type: DataType.STRING(30),
    //     allowNull: false,
    // })
    // public mac: string;

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
