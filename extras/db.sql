DROP DATABASE IF EXISTS dust;

CREATE DATABASE IF NOT EXISTS dust CHARACTER SET utf8;
USE dust;
SET time_zone = "+08:00";

CREATE TABLE IF NOT EXISTS `users` (
    `userId` MEDIUMINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `userName` VARCHAR(50) NOT NULL,
    `userImage` VARCHAR(40) DEFAULT NULL,
    PRIMARY KEY (userId)
);

INSERT INTO `users` (userName) values ('magnus');
INSERT INTO `users` (userName) values ('levon');
INSERT INTO `users` (userName) values ('anand');
INSERT INTO `users` (userName) values ('kramnik');