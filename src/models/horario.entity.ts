import { Table, Column, Model, DataType, ForeignKey, BelongsTo, CreatedAt, UpdatedAt } from 'sequelize-typescript';
import { Microruta } from './microruta.entity';

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

    @ForeignKey( () => Microruta )
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    public microrutaId: number;

    @BelongsTo( () => Microruta )
    public microruta: Microruta;

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

    @CreatedAt
    public creacion: Date;

    @UpdatedAt
    public modificacion: Date;
}
