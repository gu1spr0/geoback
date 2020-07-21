import { Table, Column, Model, DataType, HasMany, CreatedAt, UpdatedAt } from 'sequelize-typescript';
import { Ruta } from './ruta.entity';

@Table({
    tableName: 'distrito',
})
export class Distrito extends Model<Distrito> {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
    })
    public distritoId: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    public numero: number;

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

    @HasMany(() => Ruta)
    rutas: Ruta[];

    @CreatedAt
    public creacion: Date;

    @UpdatedAt
    public modificacion: Date;
}
