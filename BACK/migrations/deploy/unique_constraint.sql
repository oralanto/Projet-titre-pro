-- Deploy oboardgame:unique_constraint to pg

BEGIN;

ALTER TABLE "user"
ADD CONSTRAINT unique_pseudo UNIQUE (pseudo);

ALTER TABLE "user"
ADD CONSTRAINT unique_email UNIQUE (email);

ALTER TABLE "user"
ADD CONSTRAINT unique_phone_number UNIQUE (phone_number);

COMMIT;
