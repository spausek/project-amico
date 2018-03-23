DROP DATABASE IF EXISTS language_learners;
CREATE DATABASE language_learners;
USE language_learners;

CREATE TABLE amico_languages  
(
    id INT(100) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    native_language VARCHAR(200) NOT NULL,
    language_code VARCHAR(200) NOT NULL
);