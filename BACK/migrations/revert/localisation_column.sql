-- Revert oboardgame:localisation_column from pg

BEGIN;

ALTER TABLE advert DROP COLUMN localisation_id;

COMMIT;
