import { Table, Column, Model, DataType, CreatedAt, UpdatedAt, DeletedAt, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Vehiculo } from './vehiculo.entity';
import { Persona } from './persona.entity';

@Table({
    tableName: 'ayudante',
})
export class Ayudante extends Model<Ayudante> {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,

    })
    public ayudanteId: number;

    @Column({
        type: DataType.STRING(30),
        allowNull: true,
    })
    public descripcion: string;

    @Column({
        type: DataType.STRING(2),
        allowNull: false,
    })
    public valido: string;

    @ForeignKey( () => Persona)
    @Column
    personaId: number;

    @BelongsTo( () => Persona)
    persona: Persona;

    @ForeignKey( () => Vehiculo)
    @Column
    vehiculoId: number;

    @BelongsTo( () => Vehiculo)
    vehiculo: Vehiculo;

    @CreatedAt
    public creacion: Date;

    @UpdatedAt
    public modificacion: Date;
}
