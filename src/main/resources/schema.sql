CREATE TABLE account (
id serial primary key,
username varchar(100) NOT NULL,
firstName varchar(100) NOT NULL,
lastName varchar(100) NOT NULL,
emailAddress varchar(100) NOT NULL,
dateOfBirth date,
password varchar(20) NOT NULL,
address_id integer not null,
);

CREATE TABLE role (
id serial primary key,
userid integer NOT NULL,
role varchar(100) NOT NULL
);

CREATE TABLE permission (
id serial primary key,
roleid integer NOT NULL,
permission varchar(100) NOT NULL
);

