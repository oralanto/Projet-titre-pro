BEGIN;

-- write the following command to seed the database :

-- dropdb oboardgame 
-- createdb oboardgame
-- sqitch deploy db:pg:oboardgame
-- psql -f data/import_data.sql -d oboardgame


-- INSERT INTO advert (title, description, location_price, advert_image, game_title, game_author, game_release_year, game_avg_duration, game_min_players, game_max_players, game_suggested_age, "user_id", game_id) VALUES
-- ('7Wonders piteux état', 'je loue 7Wonders vraiment pas bien conservé', 5, 'https://blalbla', '7Wonders', 'Antoine Bauza', 2010, '60 minutes', 2, 7, 8, 5, 4),
-- ('Catan bon état', 'je loue Catan pas trop dégueux', 5, 'https://blalbla', 'Catan', 'Klaus Teber', 2005, '55 minutes', 2, 7, 10, 4, 3);

INSERT INTO advert_has_category (category_id, advert_id) VALUES 
(6, 23),
(4, 22),
(3, 23),
(3, 22);

COMMIT;