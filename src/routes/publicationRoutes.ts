import { Router } from 'express';

import { publicationController }  from '../controller/publicationController';

class PublicationRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', publicationController.list);   
        this.router.get('/:id', publicationController.getOne);  
        this.router.post('/', publicationController.create);        
        this.router.delete('/:id', publicationController.delete);
        this.router.put('/:id', publicationController.update);
    }
}

const publicationRoutes = new PublicationRoutes();

export default publicationRoutes.router;