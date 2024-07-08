import { IRouting } from "../interfaces";
import { Middleware } from "../type";

export interface IServerConfiguration {
    init(port: number): void;
    initializeRoutes?(routings: IRouting[]): { method: string, path: string }[];
    initializeMiddlewares?(middlewares: Middleware[]): void;
}