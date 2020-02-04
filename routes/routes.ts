// Aquí creamos nuestras API's REST

import { Router, Request, Response, constructor, request } from 'express';


export const router = Router();

router.get( '/directores', ( req: Request, res: Response ) =>{

    const cuerpo = req.body.cuerpo;
    const de = req.body.de;

    res.json({

        ok: true,
        cuerpo,
        de
    });
    
});

router.get( '/directores/:id', ( req: Request, res: Response ) =>{

    const cuerpo    = req.body.cuerpo;
    const de        = req.body.de;
    const id        = req.params.id;

    res.json({

        ok: true,
        cuerpo,
        de,
        id
    });
    
});

