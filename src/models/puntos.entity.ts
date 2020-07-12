import { Table, Column, Model, DataType, HasOne, CreatedAt, UpdatedAt } from 'sequelize-typescript';
@Table({
    tableName: 'puntos',
})
export class Puntos extends Model<Puntos> {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
    })
    public puntoId: number;

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

    @CreatedAt
    public creacion: Date;

    @UpdatedAt
    public modificacion: Date;
    @Column({
        type: DataType.STRING(2),
        allowNull: false,
    })
    public valido: string;

    @Column({
        type: DataType.GEOMETRY('POINT', 3857),
        allowNull: false,
    })
    public punto: any;
}
