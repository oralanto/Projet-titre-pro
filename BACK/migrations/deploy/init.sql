-- Deploy oboardgame:init to pg

BEGIN;

-- creation of the tables in the database

CREATE TABLE category (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" text UNIQUE NOT NULL,
    "color" text UNIQUE NOT NULL
);

CREATE TABLE "role" (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name text UNIQUE NOT NULL
);

CREATE TABLE localisation (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    city text NOT NULL,
    postal_code text NOT NULL,
    department text NOT NULL
);

CREATE TABLE "user" (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    firstname varchar(64) NOT NULL,
    lastname varchar(64) NOT NULL,
    pseudo varchar(32) NOT NULL,
    email varchar(310) NOT NULL,
    "password" text NOT NULL,
    phone_number int ,
    role_id int NOT NULL REFERENCES role(id) DEFAULT 1,
    localisation_id int NOT NULL REFERENCES localisation(id)
);

CREATE TABLE game (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title varchar(128) NOT NULL,
    author varchar(128) NOT NULL,
    editor varchar(128) NOT NULL,
    release_year text,
    avg_duration text NOT NULL,
    min_players int NOT NULL, 
    max_players int,
    suggested_age int NOT NULL,
    image text NOT NULL
);

CREATE TABLE advert (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title varchar(128) NOT NULL,
    description text NOT NULL,
    publication_date timestamptz NOT NULL DEFAULT NOW(),
    location_price decimal(5, 2) NOT NULL,
    advert_image text,
    game_title varchar(128) NOT NULL,
    game_author varchar(128),
    game_release_year text,
    game_avg_duration text NOT NULL,
    game_min_players int NOT NULL, 
    game_max_players int,
    game_suggested_age int NOT NULL,
    "user_id" int NOT NULL REFERENCES "user"(id),
    game_id int REFERENCES game(id)
);

CREATE TABLE advert_has_category (
    advert_id int NOT NULL REFERENCES advert(id) ON DELETE CASCADE,
    category_id int NOT NULL REFERENCES category(id) ON DELETE CASCADE,
    PRIMARY KEY (advert_id, category_id)
);

CREATE TABLE game_has_category (
    game_id int NOT NULL REFERENCES game(id) ON DELETE CASCADE,
    category_id int NOT NULL REFERENCES category(id) ON DELETE CASCADE,
    PRIMARY KEY (game_id, category_id)
);

CREATE TABLE user_has_favourite (
    user_id int NOT NULL REFERENCES "user"(id) ON DELETE CASCADE,
    advert_id int NOT NULL REFERENCES advert(id) ON DELETE CASCADE,
    PRIMARY KEY (user_id, advert_id)
);


COMMIT;
