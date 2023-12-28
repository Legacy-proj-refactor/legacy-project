-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema marketplace
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema marketplace
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `marketplace` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `marketplace` ;

-- -----------------------------------------------------
-- Table `marketplace`.`categorys`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `marketplace`.`categorys` (
  `idcat` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `image` LONGTEXT NOT NULL,
  PRIMARY KEY (`idcat`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `marketplace`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `marketplace`.`users` (
  `idu` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` LONGTEXT NOT NULL,
  `rols` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idu`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `marketplace`.`product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `marketplace`.`product` (
  `idp` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `image` JSON NOT NULL,
  `lastprice` INT NOT NULL,
  `newprice` INT NOT NULL,
  `categorys_idcat` INT NOT NULL,
  `users_idu` INT NOT NULL,
  `rate` INT NOT NULL,
  `discription` LONGTEXT NOT NULL,
  `color` VARCHAR(45) NOT NULL,
  `size` ENUM("xs", "S", "M", "L", "XL") NOT NULL,
  `sellername` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idp`),
  INDEX `fk_product_categorys1_idx` (`categorys_idcat` ASC) VISIBLE,
  INDEX `fk_product_users1_idx` (`users_idu` ASC) VISIBLE,
  CONSTRAINT `fk_product_categorys1`
    FOREIGN KEY (`categorys_idcat`)
    REFERENCES `marketplace`.`categorys` (`idcat`),
  CONSTRAINT `fk_product_users1`
    FOREIGN KEY (`users_idu`)
    REFERENCES `marketplace`.`users` (`idu`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `marketplace`.`save`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `marketplace`.`save` (
  `idsave` INT NOT NULL AUTO_INCREMENT,
  `users_idu` INT NOT NULL,
  `product_idp` INT NOT NULL,
  PRIMARY KEY (`idsave`),
  INDEX `fk_save_users1_idx` (`users_idu` ASC) VISIBLE,
  INDEX `fk_save_product1_idx` (`product_idp` ASC) VISIBLE,
  CONSTRAINT `fk_save_product1`
    FOREIGN KEY (`product_idp`)
    REFERENCES `marketplace`.`product` (`idp`),
  CONSTRAINT `fk_save_users1`
    FOREIGN KEY (`users_idu`)
    REFERENCES `marketplace`.`users` (`idu`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
