import { Vehiculo } from './vehiculo.entity';
import { Table, Column, Model, DataType, HasMany, HasOne, CreatedAt, UpdatedAt } from 'sequelize-typescript';
import { DistritoMacro } from './distrito_macro.entity';
import { Microruta } from './microruta.entity';

@Table({
    tableName: 'macroruta',
})
export class Macroruta extends Model<Macroruta> {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
    })
    public macrorutaId: number;

    @Column({
        type: DataType.STRING(10),
        allowNull: false,
    })
    public codigo: string;

    @Column({
        type: DataType.GEOMETRY('LINE', 3857),
        allowNull: false,
    })
    public ruta: any;

    @Column({
        type: DataType.GEOMETRY('POLYGON', 3857),
        allowNull: false,
    })
    public area: any;

    @Column({
        type: DataType.STRING(30),
        allowNull: true,
    })
    public descripcion: string;

    @Column({
        type: DataType.STRING(2),
        allowNull: false,
    })
    public valido: string;

    @HasMany(() => Microruta)
    public microrutas: Microruta[];

    @HasOne(() => Vehiculo)
    public vehiculo: Vehiculo;

    @HasMany(() => DistritoMacro)
    public distritosMacros: DistritoMacro[];

    @CreatedAt
    public creacion: Date;

    @UpdatedAt
    public modificacion: Date;
}
