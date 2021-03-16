-- Revert oboardgame:unique_constraint from pg

BEGIN;

ALTER TABLE "user"
DROP CONSTRAINT unique_phone_number;

ALTER TABLE "user"
DROP CONSTRAINT unique_email;

ALTER TABLE "user"
DROP CONSTRAINT unique_pseudo;

COMMIT;
