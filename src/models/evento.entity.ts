import { Conductor } from './conductor.entity';
import { Table, Column, Model, DataType, ForeignKey, BelongsTo, CreatedAt, UpdatedAt } from 'sequelize-typescript';

@Table({
    tableName: 'evento',
})
export class Evento extends Model<Evento> {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
    })
    public eventoId: number;

    @Column({
        type: DataType.STRING(20),
        allowNull: false,
    })
    public evento: string;

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
        type: DataType.STRING(2),
        allowNull: false,
    })
    public valido: string;

    @ForeignKey( () => Conductor )
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    public conductorId: number;

    @BelongsTo( () => Conductor )
    conductor: Conductor;

    @CreatedAt
    public creacion: Date;

    @UpdatedAt
    public modificacion: Date;
}
