DROP DATABASE IF EXISTS `burgers_db`;
CREATE DATABASE `burgers_db`;
USE `burgers_db`;

CREATE TABLE burger (
  id int AUTO_INCREMENT,
  burger_name VARCHAR(10) NOT NULL,
  devoured BOOLEAN NOT NULL,
  PRIMARY KEY(id)
);
