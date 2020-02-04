// Configuración de servidor

import Servidor from './classes/servidor';
import { router } from './routes/routes';
import bodyParser from 'body-parser';
import cors from 'cors';

import * as request from "request-promise-native";

// Servidor
const servidor = new Servidor();

// Body Parser
servidor.app.use( bodyParser.urlencoded( { extended: true }) );
servidor.app.use( bodyParser.json() );

// CORS
servidor.app.use( cors( { origin: true, credentials: true } ) );

// Rutas de Servicios
servidor.app.use( '/', router );

servidor.inicio( () =>{

    console.log( `Servidor corriendo en el puerto ${ servidor.port }` );
    
})