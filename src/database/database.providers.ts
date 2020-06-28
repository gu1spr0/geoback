import { Sequelize } from 'sequelize-typescript';
import { Ayudante } from './../models/ayudante.entity';
import { Conductor } from './../models/conductor.entity';
import { Departamento } from './../models/departamento.entity';
import { Deshecho } from './../models/deshecho.entity';
import { Dispositivo } from './../models/dispositivo.entity';
import { DistritoMacro } from './../models/distrito_macro.entity';
import { Distrito } from './../models/distrito.entity';
import { Evento } from './../models/evento.entity';
import { Horario } from './../models/horario.entity';
import { Login } from './../models/login.entity';
import { Macroruta } from './../models/macroruta.entity';
import { Microruta } from './../models/microruta.entity';
import { Persona } from './../models/persona.entity';
import { Rol } from './../models/rol.entity';
import { Ubicacion } from './../models/ubicacion.entity';
import { Usuario } from './../models/usuario.entity';
import { Vehiculo } from './../models/vehiculo.entity';
import { VisitanteVehiculo } from './../models/visitante_vehiculo.entity';
import { Visitante } from './../models/visitante.entity';

export const DatabaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'postgres',
                host: '68.183.101.117',
                port: 5432,
                username: 'postgres',
                password: 'Kuillerlearsi10+',
                database: 'geo',
            });
            sequelize.addModels([Ayudante,
                Conductor,
                Departamento,
                Deshecho,
                Dispositivo,
                DistritoMacro,
                Distrito,
                Evento,
                Horario,
                Login,
                Macroruta,
                Microruta,
                Persona,
                Rol,
                Ubicacion,
                Usuario,
                Vehiculo,
                VisitanteVehiculo,
                Visitante]);
            // await sequelize.sync();
            return sequelize;
        },
    },
];
