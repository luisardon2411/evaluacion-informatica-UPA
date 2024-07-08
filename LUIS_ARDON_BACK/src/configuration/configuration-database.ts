import { DataSource } from "typeorm";
import { config as dotenvConfig } from 'dotenv';
import { Logger } from "../utils/Logger";
import { Usuario, EstadoUsuario } from "../models";



dotenvConfig();

export const DataSourceConfig = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [Usuario, EstadoUsuario],
    synchronize: false,
    logging: false,
});


export class ConfigurationDatabase {

    private static logger: Logger = new Logger();

    public static async initialize(): Promise<void> {
        
        await DataSourceConfig.initialize();
        this.logger.log('Conexión a la base de datos establecida');
    }
}