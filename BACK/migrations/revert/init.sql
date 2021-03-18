-- Revert oboardgame:init from pg

BEGIN;

DROP TABLE 
        user_has_favourite,
        game_has_category,
        advert_has_category,
        advert,
        game,
        "user",
        localisation,
        "role",
        category;


COMMIT;
