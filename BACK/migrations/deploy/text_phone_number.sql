-- Deploy oboardgame:text_phone_number to pg

BEGIN;

ALTER TABLE "user" ALTER COLUMN phone_number TYPE text;

COMMIT;
