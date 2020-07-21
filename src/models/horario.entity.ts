import { Table, Column, Model, DataType, ForeignKey, BelongsTo, CreatedAt, UpdatedAt, HasOne } from 'sequelize-typescript';
import { Ruta } from './ruta.entity';

@Table({
    tableName: 'horario',
})
export class Horario extends Model<Horario> {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
    })
    public horarioId: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    public dia: number;

    @Column({
        type: DataType.TIME,
        allowNull: false,
    })
    public hora: Date;

    @Column({
        type: DataType.STRING(2),
        allowNull: false,
    })
    public valido: string;

    @HasOne(() => Ruta)
    ruta: Ruta;

    @CreatedAt
    public creacion: Date;

    @UpdatedAt
    public modificacion: Date;
}
