DROP TABLE IF EXISTS shoppers;

CREATE TABLE shoppers (
  id SERIAL PRIMARY KEY,
  customer VARCHAR(250),
  number_of_orders INTEGER
);

DROP TABLE IF EXISTS items;

CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  product_name VARCHAR(250),
  price DECIMAL,
  section VARCHAR(250),
  item_id INTEGER,
  FOREIGN KEY(item_id) REFERENCES shoppers(id)
);

DROP TABLE IF EXISTS orders;

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  total_cost DECIMAL,
  total_id INTEGER,
  FOREIGN KEY(total_id) REFERENCES shoppers(id)
);
