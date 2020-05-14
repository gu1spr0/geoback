import { Vehiculo } from './vehiculo.entity';
import { Table, Model, Column, DataType, ForeignKey, HasMany, HasOne, CreatedAt, UpdatedAt, BelongsTo } from 'sequelize-typescript';
import { Evento } from './evento.entity';
import { Persona } from './persona.entity';

@Table({
    tableName: 'conductor',
})
export class Conductor extends Model<Conductor> {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
    })
    public conductorId: number;

    @ForeignKey( () => Persona )
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    public personaId: number;

    @BelongsTo( () => Persona )
    public persona: Persona;

    @Column({
        type: DataType.STRING(2),
        allowNull: false,
    })
    public categoria: string;

    @HasMany( () => Evento )
    public eventos: Evento[];

    @HasOne( () => Vehiculo )
    public vehiculo: Vehiculo;

    @CreatedAt
    public creacion: Date;

    @UpdatedAt
    public modificacion: Date;
}
