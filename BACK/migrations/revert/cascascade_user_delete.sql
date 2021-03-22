-- Revert oboardgame:cascascade_user_delete from pg

BEGIN;

ALTER TABLE advert 
DROP CONSTRAINT advert_user_id_fkey;

ALTER TABLE advert 
ADD CONSTRAINT advert_user_id_fkey
FOREIGN KEY (user_id)
REFERENCES "user"(id);

COMMIT;
