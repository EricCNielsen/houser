create table houses(
    id serial primary key,
    name varchar(30),
    address varchar(100),
    city varchar(100),
    state varchar(2),
    zip integer,
    img text,
    mortgage decimal,
    rent decimal

)

insert into houses(name, address, city, state, zip)
values ('eric', '155 fake st', 'new yawk', 'ny', 15543),
('tom', '123 abc ave', 'columbus', 'pa', 12312),
('Juju', '1442 space jam ln', 'los angeles', 'wy', 76778)