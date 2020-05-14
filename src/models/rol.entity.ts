import { Table, Column, Model, DataType, HasOne, CreatedAt, UpdatedAt } from 'sequelize-typescript';
import { Usuario } from './usuario.entity';
@Table({
    tableName: 'rol',
})
export class Rol extends Model<Rol> {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
    })
    public rolId: number;

    @Column({
        type: DataType.STRING(30),
        allowNull: false,
    })
    public nombre: string;

    @Column({
        type: DataType.STRING(100),
        allowNull: true,
    })
    public descripcion: string;

    @Column({
        type: DataType.STRING(100),
        allowNull: true,
    })
    public observacion: string;

    @Column({
        type: DataType.STRING(2),
        allowNull: true,
    })
    public valido: string;

    @HasOne(() => Usuario)
    usuario: Usuario;

    @CreatedAt
    public creacion: Date;

    @UpdatedAt
    public modificacion: Date;
}
