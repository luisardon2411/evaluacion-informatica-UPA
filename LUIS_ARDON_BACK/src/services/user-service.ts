import { Usuario } from "../models/Usuario";
import { CreateUsuarioDto } from "../dtos";
import { DataSourceConfig } from "../configuration";
import { isValid, parse } from "date-fns";



export class UserService {

    private readonly userRepository = DataSourceConfig.getRepository(Usuario);

    public async create(createUserDto: CreateUsuarioDto): Promise<Usuario> {


        const parsedFecha = parse(createUserDto.fecha, 'dd/MM/yyyy', new Date());
        if (!isValid(parsedFecha)) {
          throw new Error('Fecha no válida');
        }

        const usuario = new Usuario();
        usuario.nombre = createUserDto.nombre;
        usuario.fecha = parsedFecha;
        usuario.correo_electronico = createUserDto.correo_electronico;
        usuario.creacion = new Date();
        usuario.telefono = createUserDto.telefono;
        usuario.estadoUsuario = { id: 1 };

        return await this.userRepository.save(usuario);
    }
    
}