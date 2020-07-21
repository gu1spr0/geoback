import { Sequelize } from 'sequelize-typescript';
import { Ayudante } from './../models/ayudante.entity';
import { Conductor } from './../models/conductor.entity';
import { Departamento } from './../models/departamento.entity';
import { Deshecho } from './../models/deshecho.entity';
import { Dispositivo } from './../models/dispositivo.entity';
import { Distrito } from './../models/distrito.entity';
import { Evento } from './../models/evento.entity';
import { Horario } from './../models/horario.entity';
import { Login } from './../models/login.entity';
import { Persona } from './../models/persona.entity';
import { Rol } from './../models/rol.entity';
import { Ubicacion } from './../models/ubicacion.entity';
import { Usuario } from './../models/usuario.entity';
import { Vehiculo } from './../models/vehiculo.entity';
import { VisitanteVehiculo } from './../models/visitante_vehiculo.entity';
import { Visitante } from './../models/visitante.entity';
import { Puntos } from './../models/puntos.entity';
import { Ruta } from '../models/ruta.entity';

export const DatabaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'postgres',
                host: '68.183.101.117',
                port: 5432,
                username: 'backend',
                password: 'Kuillerlearsi10+',
                database: 'geo',
            });
            sequelize.addModels([Ayudante,
                Conductor,
                Departamento,
                Deshecho,
                Dispositivo,
                Distrito,
                Evento,
                Horario,
                Login,
                Persona,
                Rol,
                Ubicacion,
                Usuario,
                Vehiculo,
                VisitanteVehiculo,
                Visitante,
                Puntos,
                Ruta]);
            // await sequelize.sync();
            return sequelize;
        },
    },
];
