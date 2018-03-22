DROP DATABASE IF EXISTS language_learners;
CREATE DATABASE language_learners;
USE language_learners;

CREATE TABLE amico_users  
(
    id INT(100) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    amico_user_name VARCHAR(300) NOT NULL,
    native_language VARCHAR(200) NOT NULL,
    learning_language VARCHAR(200) NOT NULL
);