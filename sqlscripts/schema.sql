create table category (
    id serial,
    name character varying(45),
    CONSTRAINT category_pkey PRIMARY KEY (id)
);

create table book (
    id serial,
    title character varying(255),
    description character varying(255),
    price decimal,
    year integer,
    author character varying(45),
    isbn character varying(45),
    category_id integer REFERENCES category (id),
    CONSTRAINT book_pkey PRIMARY KEY (id)
)
