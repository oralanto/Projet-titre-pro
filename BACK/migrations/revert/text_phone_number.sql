-- Revert oboardgame:text_phone_number from pg

BEGIN;

ALTER TABLE "user" ALTER COLUMN phone_number TYPE int;

COMMIT;
