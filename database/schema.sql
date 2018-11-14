DROP DATABASE IF EXISTS zillower;
CREATE DATABASE zillower;
USE zillower;

DROP TABLE IF EXISTS zillower;

CREATE TABLE mortgage(
    id INT NOT NULL AUTO_INCREMENT,
    home_price INT NOT NULL,
    property_tax INT NOT NULL,
    home_insurance INT NOT NULL,
    hoa_dues INT NOT NULL,
    PRIMARY KEY (id)
)
