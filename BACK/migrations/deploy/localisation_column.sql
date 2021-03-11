-- Deploy oboardgame:localisation_column to pg

BEGIN;

ALTER TABLE advert
ADD COLUMN localisation_id int REFERENCES localisation(id);

COMMIT;
