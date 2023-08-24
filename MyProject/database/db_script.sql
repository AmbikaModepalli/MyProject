-- -----------------------------------------------------
-- Create a new user
-- -----------------------------------------------------

CREATE USER 'hospitalmanagementsystem'@'localhost' IDENTIFIED BY 'hospitalmanagementsystem';

GRANT ALL PRIVILEGES ON *  . * TO 'hospitalmanagementsystem'@'localhost';

ALTER USER 'hospitalmanagementsystem'@'localhost' IDENTIFIED WITH mysql_native_password BY 'hospitalmanagementsystem';


-- -----------------------------------------------------
-- Schema hospitalmanagement
-- -----------------------------------------------------

DROP SCHEMA IF EXISTS `hospitalmanagementsystem`;

CREATE SCHEMA `hospitalmanagementsystem`;

USE `hospitalmanagementsystem` ;

-- -----------------------------------------------------
-- Table `hospitalmanagementsystem`.`patient`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `patient` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(255) DEFAULT NULL,
  `age` INT DEFAULT NULL,
  `blood_group` VARCHAR(10) DEFAULT NULL,
  `prescription` VARCHAR(20) DEFAULT NULL,
  `dose` VARCHAR(255) DEFAULT NULL,
  `fees` VARCHAR(50) DEFAULT NULL,
  `urgency` VARCHAR(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) 
ENGINE=InnoDB 
AUTO_INCREMENT=1;

-- -----------------------------------------------------
-- Table `hospitalmanagementsystem`.`appointment`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `appointment` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) DEFAULT NULL,
  `age` VARCHAR(255) DEFAULT NULL,
  `symptoms` VARCHAR(255) DEFAULT NULL,
  `number` VARCHAR(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) 
ENGINE=InnoDB 
AUTO_INCREMENT=1;

-- -----------------------------------------------------
-- Table `hospitalmanagementsystem`.`medicines`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `medicines` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `drug_name` VARCHAR(255) DEFAULT NULL,
  `stock` VARCHAR(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) 
ENGINE=InnoDB 
AUTO_INCREMENT=1;