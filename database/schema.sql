CREATE SCHEMA if not exists zillower;

CREATE TABLE if not exists zillower.data (
  home_id INT NOT NULL,
  home_name TEXT NOT NULL,
  home_price INT NOT NULL,
  property_tax INT NOT NULL,
  home_insurance INT NOT NULL,
  hoa_dues INT NOT NULL
);