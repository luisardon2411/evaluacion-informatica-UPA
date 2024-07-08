import { plainToInstance } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
import { Request, Response, NextFunction } from 'express';

export function validationMiddleware<T>(type: any): (req: Request, res: Response, next: NextFunction) => void {
  return (req: Request, res: Response, next: NextFunction): void => {
    const dto = plainToInstance(type, req.body);

    validate(dto).then((errors: ValidationError[]) => {
      if (errors.length > 0) {
        const errorMessages = errors.map((error: ValidationError) => {
          return {
            campo: error.property,
            error: Object.values(error.constraints || {}).join(', ')
          };
        });
        res.status(400).json({ errores: errorMessages });
      } else {
        next();
      }
    });
  };
}
