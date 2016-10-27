USE burger_db;

INSERT INTO burgers (burger_name, date) VALUES ('BigMac', now());
INSERT INTO burgers (burger_name, date) VALUES ('Italian Yummy', now());
INSERT INTO burgers (burger_name, date) VALUES ('Double Burger', now());

select * from burgers;