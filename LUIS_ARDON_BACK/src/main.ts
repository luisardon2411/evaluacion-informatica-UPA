import { Server } from "./server";
import { JsonMiddleware, UrlEncodedMiddleware } from './middlewares';

/**
 * @description Función que inicializa el servidor
 * @returns {Promise<void>}
 * @example
 * bootstrap();
 * @returns {Promise<void>}
 * @author Luis Ardón
 * @version 1.0.0
 */

const bootstrap = async (): Promise<void> => {

    const serverConfiguration = new Server();

    serverConfiguration.setGlobalPrefix('/api/v1')

    serverConfiguration.start(
        // Puerto
        3000,
        // Rutas
        [],
        // Middlewares
        [
            JsonMiddleware, 
            UrlEncodedMiddleware
        ]
    )
}

bootstrap();