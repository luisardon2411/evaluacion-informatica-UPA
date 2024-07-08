import { Usuario } from "../models/Usuario";
import { CreateUsuarioDto } from "../dtos";
import { DataSourceConfig } from "../configuration";
import { format } from "date-fns";



export class UserService {

    private readonly userRepository = DataSourceConfig.getRepository(Usuario);

    public async create(createUserDto: CreateUsuarioDto): Promise<Usuario> {

        const usuario = new Usuario();

        usuario.nombre = createUserDto.nombre;
        usuario.fecha = format(new Date(createUserDto.fecha), 'yyyy-MM-dd');
        usuario.correo_electronico = createUserDto.correo_electronico;
        usuario.creacion = new Date();
        usuario.estadoUsuario = { id: 1 };

        return await this.userRepository.save(usuario);
    }
    
}