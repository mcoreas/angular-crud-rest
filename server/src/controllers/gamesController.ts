import {Request, Response} from 'express';

import  database  from '../database';
import pool from '../database';


class GamesController{
    public async list (req: Request, res: Response){
        const games = await pool.query("SELECT * FROM games");
        res.json(games);
    }
    
    public async create (req: Request, res: Response): Promise<void>{
        await pool.query('INSERT INTO games set ?',[req.body]);
        res.json({message: 'Juego guardado.'});
    }

    public delete(req: Request, res: Response){
        res.json({text: 'Eliminando un juego'+req.params.id});
    }

    public update(req: Request, res: Response){
        res.json({text: 'Modificando un juego'+req.params.id});
    }

    getOne(req: Request, res: Response){
        res.json({text: "El juego es "+req.params.id});   
    }
}


const gamesController = new GamesController();
export default gamesController;