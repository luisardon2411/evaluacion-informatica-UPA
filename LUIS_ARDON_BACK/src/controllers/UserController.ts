import { Request, Response } from 'express';
import { UserService } from '../services/user-service';
import { CreateUsuarioDto } from '../dtos/create-user.dto';


export class UserController {

    private readonly userService: UserService;

    constructor() {
        this.userService = new UserService();
        this.create = this.create.bind(this);
    }

    public async create( { body }: Request , res: Response): Promise<void> {
        try {
            const createUserDto: CreateUsuarioDto = body;
            await this.userService.create(createUserDto);
            res.status(201).json({ response: 'usuario creado exitosamente' });
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }
}