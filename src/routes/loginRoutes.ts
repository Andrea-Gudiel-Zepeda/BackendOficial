import { Router } from 'express';

import { loginController }  from '../controller/loginController';

class LoginRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', loginController.list);   

    }
}

const loginRoutes = new LoginRoutes();

export default loginRoutes.router;