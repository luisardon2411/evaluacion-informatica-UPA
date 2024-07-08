import { Logger } from "../utils/Logger";

export function Log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        const logger = new Logger();
        logger.log(`${propertyKey}: cargado correctamente `);
        const result = originalMethod.apply(this, args);
        return result;
    };

    return descriptor;
}