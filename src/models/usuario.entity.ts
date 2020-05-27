import { Table, Column, Model, DataType, BelongsTo, ForeignKey, HasMany, HasOne, CreatedAt, UpdatedAt } from 'sequelize-typescript';
import { Login } from './login.entity';
import { Persona } from './persona.entity';
import { Rol } from './rol.entity';

@Table({
    tableName: 'usuario',
})
export class Usuario extends Model<Usuario> {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
    })
    public usuarioId: number;

    @ForeignKey(() => Persona)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    public personaId: number;

    @BelongsTo(() => Persona)
    persona: Persona;

    @ForeignKey(() => Rol)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    public rolId: number;

    @BelongsTo(() => Rol)
    rol: Rol;

    @Column({
        type: DataType.STRING(40),
        allowNull: false,
    })
    public nombre: string;

    @Column({
        type: DataType.STRING(300),
        allowNull: false,
    })
    public contraseña: string;

    @Column({
        type: DataType.STRING(2),
        allowNull: false,
    })
    public valido: string;

    @HasMany(() => Login)
    logins: Login[];

    @CreatedAt
    public creacion: Date;

    @UpdatedAt
    public modificacion: Date;
}
