import {request, Request, Response} from 'express';

import pool from '../database';

class PublicationController {

    public async list (req: Request, res: Response) {
        const articule = await pool.query('SELECT * FROM publication');
        res.json(articule);
    } 

    public async getOne (req: Request, res: Response) {
        const { id } = req.params;
        const publication = await pool.query('SELECT * FROM publication WHERE id_publication = ?', [id]);
        
        if(publication.length > 0){
            return res.json(publication[0]);
        }else{
            res.status(404).json({text: "The game doesn't exists"});
        }
    }

    public async create (req: Request, res: Response){
        await pool.query('INSERT INTO publication set ?',[req.body]);
        res.json({message: 'Publication Save'});
    }

    public async delete(req: Request, res: Response){
        const { id } = req.params;
        await pool.query('DELETE FROM publication WHERE id_publication = ?',[id])
       res.json({message: 'The game was deleted'});
    }

    public async update(req: Request, res: Response){
        const { id } = req.params;
        await pool.query('UPDATE publication set ? WHERE id_publication = ?', [req.body, id]);
        res.json({message: 'The was updated'});
    }

}


export const publicationController = new PublicationController();