import { UserController } from '../controllers';
import { IRouting } from '../interfaces';
import { Router } from 'express';
import { validationMiddleware } from '../middlewares';
import { CreateUsuarioDto } from '../dtos';


export class UserRouting implements IRouting {

    private router: Router;
    private userController: UserController;

    constructor() {
        this.router = Router();
        this.userController = new UserController();
    }

    public routes(): Router {

        this.router.post('/guardar_usuario', 
            validationMiddleware(CreateUsuarioDto),
            this.userController.create
        )

        return this.router;
    }
}