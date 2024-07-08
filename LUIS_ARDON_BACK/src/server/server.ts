import express, { Application, Router } from 'express';
import { IRouting, IServerConfiguration } from "../interfaces";
import { Middleware } from '../type';
import { Log } from '../decorators/log.decorator';
import { Logger } from '../utils/Logger';
import cors from 'cors'


export class Server implements IServerConfiguration {

    private app: Application;
    private logger: Logger;
    private prefix: string = '';

    constructor() {
        this.app = express();
        this.logger = new Logger();
    }

    public setGlobalPrefix(prefix: string): void {
        this.prefix = prefix;
    }

    public enableCors(origin: Array<string>, methods: Array<string>): void {
        this.app.use(cors({ origin, methods}));
    }

    @Log
    public init(port: number): void {
        this.app.listen(port, () => {
            this.logger.log(`Aplicacion ejecutandose en el puerto: ${port}`);
        });
    }

    @Log
    public initializeMiddlewares(middlewares: Middleware[]): void {
        middlewares.forEach(middleware => {
            this.app.use(middleware);
        });
    }

    @Log
    public initializeRoutes(routings: IRouting[]): { method: string, path: string }[] {

        const routesInfo: { method: string, path: string }[] = [];
        const router = Router();

        routings.forEach(routing => {
            const route = routing.routes();
            router.use(route);

            route.stack.forEach((middleware: any) => {
                const methods = Object.keys(middleware.route.methods).map(m => m.toUpperCase());
                methods.forEach(method => {
                    routesInfo.push({ method, path: this.prefix + middleware.route.path });
                });
            });
        });

        this.app.use(this.prefix, router);
        return routesInfo;
    }

    public start(port: number, routings: IRouting[], middlewares: Middleware[]): void {
        this.initializeMiddlewares(middlewares);
        const routesInfo = this.initializeRoutes(routings);
        this.init(port);
        this.logger.routesInfo(routesInfo);
    }

}