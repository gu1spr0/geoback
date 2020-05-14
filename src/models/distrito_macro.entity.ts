import { Table, Column, Model, DataType, ForeignKey, BelongsTo, CreatedAt, UpdatedAt } from 'sequelize-typescript';
import { Macroruta } from './macroruta.entity';
import { Distrito } from './distrito.entity';

@Table({
    tableName: 'distrito_macro',
})
export class DistritoMacro extends Model<DistritoMacro> {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
    })
    public distritoMacroId: number;

    @ForeignKey( () => Distrito )
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    public distritoId: number;

    @BelongsTo( () => Distrito )
    public distrito: Distrito;

    @ForeignKey( () => Macroruta )
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    public macrorutaId: number;

    @BelongsTo( () => Macroruta )
    public macroruta: Macroruta;

    @CreatedAt
    public creacion: Date;

    @UpdatedAt
    public modificacion: Date;
}
