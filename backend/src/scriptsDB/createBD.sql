create database avafilmes;

CREATE TABLE `avafilmes`.`movies` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(100) NULL,
  `noteReview` FLOAT NULL,
  `numReviews` INT NULL,
  `image` VARCHAR(100) NULL,
  PRIMARY KEY (`id`));


CREATE TABLE `avafilmes`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));


CREATE TABLE `avafilmes`.`reviewmovies` (
  `id_user` INT NOT NULL,
  `id_movie` INT NOT NULL,
  `review` FLOAT NULL,
  PRIMARY KEY (`id_user`, `id_movie`),
  CONSTRAINT `id_user`
    FOREIGN KEY (`id_user`)
    REFERENCES `avafilmes`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `id_movie`
    FOREIGN KEY (`id_movie`)
    REFERENCES `avafilmes`.`movies` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);