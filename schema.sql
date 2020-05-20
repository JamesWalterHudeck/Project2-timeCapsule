DROP DATABASE IF EXISTS db;

-- Create the database day_planner_db and specified it for use.
CREATE DATABASE db;

USE db;

-- Create the table plans.
CREATE TABLE table (
  id int NOT NULL AUTO_INCREMENT,
  placeholder varchar(255) NOT NULL,
  PRIMARY KEY (id)
);
