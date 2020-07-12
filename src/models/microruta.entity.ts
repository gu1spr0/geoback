import { Table, Column, Model, DataType, HasOne, ForeignKey, BelongsTo, CreatedAt, UpdatedAt } from 'sequelize-typescript';
import { Macroruta } from './macroruta.entity';
import { Horario } from './horario.entity';

@Table({
    tableName: 'microruta',
})
export class Microruta extends Model<Microruta> {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
    })
    public microrutaId: number;

    @HasOne(() => Horario)
    public horario: Horario;

    @ForeignKey(() => Macroruta)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    public macrorutaId: number;

    @BelongsTo(() => Macroruta)
    macroruta: Macroruta;

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
        type: DataType.INTEGER,
        allowNull: false,
    })
    public manzanas: number;

    @Column({
        type: DataType.STRING(30),
        allowNull: false,
    })
    public descripcion: string;

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
