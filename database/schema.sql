CREATE TABLE if not exists datahaus (
  home_id INT NOT NULL,
  home_name TEXT NOT NULL,
  home_price INT NOT NULL,
  property_tax INT NOT NULL,
  home_insurance INT NOT NULL,
  hoa_dues INT NOT NULL
);


-- \COPY datahaus(home_id, home_name, home_price,property_tax,home_insurance,hoa_dues)FROM '/Users/GloryKim/desktop/sdc/mortgage-calculator/database/data.csv' DELIMITER ',' CSV HEADER;
