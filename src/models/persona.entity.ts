import { Table, Column, Model, DataType, BelongsTo, ForeignKey, HasOne, CreatedAt, UpdatedAt } from 'sequelize-typescript';
import { Departamento } from './departamento.entity';
import { Usuario } from './usuario.entity';
import { Ayudante } from './ayudante.entity';
import { Conductor } from './conductor.entity';

@Table({
    tableName: 'persona',
})
export class Persona extends Model<Persona> {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
    })
    public personaId: number;

    @Column({
        type: DataType.STRING(20),
        allowNull: false,
    })
    public cedula: string;

    @ForeignKey( () => Departamento )
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    public departamentoId: number;

    @BelongsTo( () => Departamento)
    public departamento: Departamento;

    @Column({
        type: DataType.STRING(50),
        allowNull: false,
    })
    public nombre: string;

    @Column({
        type: DataType.STRING(50),
        allowNull: false,
    })
    public paterno: string;

    @Column({
        type: DataType.STRING(50),
        allowNull: true,
    })
    public materno: string;

    @Column({
        type: DataType.STRING(30),
        allowNull: true,
    })
    public telefono: string;

    @Column({
        type: DataType.STRING(10),
        allowNull: true,
    })
    public celular: string;

    @Column({
        type: DataType.STRING(50),
        allowNull: false,
    })
    public direccion: string;

    @Column({
        type: DataType.STRING(40),
        allowNull: true,
    })
    public email: string;

    @Column({
        type: DataType.STRING(2),
        allowNull: false,
    })
    public valido: string;

    @HasOne( () => Usuario )
    usuario: Usuario;

    @HasOne( () => Ayudante )
    ayudante: Ayudante;

    @HasOne( () => Conductor )
    conductor: Conductor;

    @CreatedAt
    public creacion: Date;

    @UpdatedAt
    public modificacion: Date;
}
