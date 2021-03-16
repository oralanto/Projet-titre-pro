-- Deploy oboardgame:cascascade_user_delete to pg

BEGIN;

ALTER TABLE advert 
DROP CONSTRAINT advert_user_id_fkey;

ALTER TABLE advert 
ADD CONSTRAINT advert_user_id_fkey
FOREIGN KEY (user_id)
REFERENCES "user"(id)
ON DELETE CASCADE;

COMMIT;
