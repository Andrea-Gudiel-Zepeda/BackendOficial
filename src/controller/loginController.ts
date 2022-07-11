import {Request, Response} from 'express'
import pool from '../database';

class LoginController {

    public async list (req: Request, res: Response) {
        const user = await pool.query('SELECT * FROM user_url');
        res.json(user);
    } 
}


export const loginController = new LoginController();