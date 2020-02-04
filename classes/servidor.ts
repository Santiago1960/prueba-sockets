// Clase Servidor

import express from "express";
import { SERVER_PORT } from '../global/enviroment';

export default class Servidor {

    public app: express.Application;
    public port: number;

    constructor() {

        this.app    = express();
        this.port   = SERVER_PORT;
    }

    inicio( callback: Function ) {

        this.app.listen( this.port, callback() );
    }
}