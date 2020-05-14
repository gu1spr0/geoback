import { Usuario } from './usuario.entity';
import { Table, Column, Model, DataType, ForeignKey, BelongsTo, CreatedAt, UpdatedAt } from 'sequelize-typescript';

@Table({
    tableName: 'login',
})
export class Login extends Model<Login> {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
    })
    public loginId: number;

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

    @ForeignKey( () => Usuario )
    @Column
    public usuarioId: number;

    @BelongsTo( () => Usuario )
    public usuario: Usuario;

    @CreatedAt
    public creacion: Date;

    @UpdatedAt
    public modificacion: Date;
}
