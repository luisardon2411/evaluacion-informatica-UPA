import { IsString, IsEmail, MaxLength, IsNumber, MinLength } from 'class-validator';
import { IsDateFormat } from '../decorators/date-format-validation.decorator';

export class CreateUsuarioDto {
  @IsString({ message: 'El nombre es obligatorio y debe ser una cadena de texto' })
  nombre!: string;

  @IsDateFormat({message: 'La fecha debe tener el formato dd/MM/YYYY'})
  fecha!: string;

  @IsEmail({},{ message: 'el formato de correo electrónico debe ser valido xxxx@xxx.xx' })
  correo_electronico!: string;

  @IsNumber({}, { message: 'El telefono debe ser un número' })
  telefono!: string;
}
