/*
Script de creación de base de datos y tablas
Evaluación UPA - Luis Ardon
Descripcion: Script de creación de base de datos y tablas
como ejecutar: mysql -u root -p < script-db-evaluacion-upa.sql
*/

-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema evaluacion_luis_ardon
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema evaluacion_luis_ardon
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `evaluacion_luis_ardon` DEFAULT CHARACTER SET utf8 ;
USE `evaluacion_luis_ardon` ;

-- -----------------------------------------------------
-- Table `evaluacion_luis_ardon`.`estado_usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `evaluacion_luis_ardon`.`estado_usuario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(50) NOT NULL,
  `clave` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `evaluacion_luis_ardon`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `evaluacion_luis_ardon`.`usuario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NOT NULL,
  `fecha` DATE NOT NULL,
  `correo_electronico` VARCHAR(60) NOT NULL,
  `telefono` VARCHAR(15) NOT NULL,
  `creacion` DATETIME NOT NULL,
  `estado_usuario_id` INT NOT NULL,
  PRIMARY KEY (`id`, `estado_usuario_id`),
  INDEX `fk_usuario_estado_usuario_idx` (`estado_usuario_id` ASC) VISIBLE,
  CONSTRAINT `fk_usuario_estado_usuario`
    FOREIGN KEY (`estado_usuario_id`)
    REFERENCES `evaluacion_luis_ardon`.`estado_usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `evaluacion_luis_ardon`.`estado_usuario`
-- -----------------------------------------------------
START TRANSACTION;
USE `evaluacion_luis_ardon`;
INSERT INTO `evaluacion_luis_ardon`.`estado_usuario` (`id`, `titulo`, `clave`) VALUES (1, 'Activo', 'activo');
INSERT INTO `evaluacion_luis_ardon`.`estado_usuario` (`id`, `titulo`, `clave`) VALUES (2, 'Baja Permanente', 'baja');

COMMIT;

