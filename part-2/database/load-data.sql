COPY items(product_name,price,section)
FROM '/Users/helen/Desktop/Phase 2/phase-3-challenge/part-2/database/grocery_items.cvs' DELIMITER ',' CSV HEADER;

INSERT INTO shoppers (customer, number_of_orders) VALUES('Shanti', 2);
INSERT INTO shoppers (customer, number_of_orders) VALUES('Mary', 1);
INSERT INTO shoppers (customer, number_of_orders) VALUES('Justin', 3);
INSERT INTO shoppers (customer, number_of_orders) VALUES('Helen', 1);
INSERT INTO shoppers (customer, number_of_orders) VALUES('Coleby', 1);

INSERT INTO orders (total_cost, total_id) VALUES(27.99, 1);
INSERT INTO orders (total_cost, total_id) VALUES(6.36, 3);
INSERT INTO orders (total_cost, total_id) VALUES(9.30, 2);
INSERT INTO orders (total_cost, total_id) VALUES(26.78, 3);
INSERT INTO orders (total_cost, total_id) VALUES(18.75, 1);
INSERT INTO orders (total_cost, total_id) VALUES(1.11, 3);
INSERT INTO orders (total_cost, total_id) VALUES(8.87, 4);
INSERT INTO orders (total_cost, total_id) VALUES(2.94, 5);
