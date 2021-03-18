BEGIN;

-- write the following command to seed the database :

-- dropdb oboardgame 
-- createdb oboardgame
-- sqitch deploy db:pg:oboardgame
-- psql -f data/import_data.sql -d oboardgame

INSERT INTO category (name, color) VALUES
('stratégie', '#555888'),
('ambiance', '#FF332E'),
('famille', '#EA21C4'),
('hasard', '#63BD54'),
('rôle', '#6EBF54'),
('plateau', '#420FE6');

INSERT INTO "role" (name) VALUES 
('user'),
('contributor'),
('admin');

-- INSERT INTO localisation (city, postal_code, department) VALUES
-- ('Lyon', 69000, 'Rhône'),
-- ('Lille', 59000, 'Nord'),
-- ('Paris', 75000, 'Ile de France'),
-- ('Bordeaux', 33000, 'Gironde'),
-- ('Marseille', 13000, 'Bouches du Rhône'),
-- ('Grenoble', 38000, 'Isère'),
-- ('Chamonix', 74440, 'Haute-Savoie');

INSERT INTO "user" (firstname, lastname, pseudo, email, "password", phone_number, role_id, localisation_id) VALUES
('Killian', 'Courvoisier', 'Kiki', 'dev.killian.courvoisier@gmail.com', '1234', 0624589461, 3, 2),
('Monsieur', 'Ladmin', 'adminsys', 'admin.sys@gmail.com', '12356' , '0784612598', 3, 1),
('Mathis', 'Pati', 'Thisma', 'mathis.pati@gmail.com', '0000', '0325648792', 3, 2),
('Gertrude', 'Dupont', 'Gege', 'gege@gmail.com', '5678', '0784626562', 1, 5);

INSERT INTO "user" (firstname, lastname, pseudo, email, "password", phone_number, localisation_id) VALUES
('Roger', 'Osef', 'roro', 'roro@hotmail.com', '8912', '0245662794', 4),
('Rodolphe', 'Classique', 'dodo', 'dodo@hotmail.com', '5825', '0452897112', 6),
('Jacqueline', 'du74', 'jaja', 'jaja@hotmail.com', '7658', '0125641558', 7);



INSERT INTO game (title, author, editor, release_year, avg_duration, min_players, max_players, suggested_age, image) VALUES 
('Monopoly', 'Charles Darrow', 'Hasbro', 1935, '60-120 min', 2, 6, 8, 'https://www.shutterstock.com/image-photo/bangkok-thailand-feb-11-2019-monopoly-1309724374'),
('Uno', 'Merle Robbins', 'Mattel', 1985, '30 min', 2, 10, 7, 'https://commons.wikimedia.org/wiki/File:Baraja_de_UNO.JPG#/media/Fichier:Baraja_de_UNO.JPG'),
('Catan', 'Klaus Teuber', 'Jeux Descartes', 1995, '75 min', 3, 4, 10, 'https://www.shutterstock.com/image-photo/amsterdam-netherlands-march-1-2019-dutch-1326429980'),
('Seven Wonders', 'Antoine Bauza', 'Repos Production', 2010, '40-90 min', 2, 7, 10, 'https://alloescape.fr/wp-content/uploads/2018/05/7-wonders-vf.jpg'),
('Risk', 'Albert Lamorisse', 'Miro Compagny', 1957, '120 min', 2, 6, 10, 'https://cdn-images-1.medium.com/max/1600/1*leQsT43ge-lg8JUgcds02g.jpeg'),
('Jungle Speed', 'Thomas Vuarchex & Pierric Yakovenko', 'Asmodée', 1996, '30 min', 2, 160, 7, 'https://www.shutterstock.com/image-photo/splitcroatia-march-2020-view-jungle-speed-1691642323'),
('Qui est-ce ?', 'Theo et Ora Coster', 'MB', 1979, '15 min', 2, NULL, 6, 'https://i.apreslachat.com/img/4/8/3/7/497384.jpg'),
('Dixit', 'Jean-Louis Roubira', 'Libellud', 2008, '30 min', 3, 12, 8, 'https://cdn.shopify.com/s/files/1/0921/7330/products/2_21c58ca1-74ec-48bb-b18e-72c3a990312f_1200x1200.jpg?v=1568686152');

INSERT INTO advert (title, description, location_price, advert_image, game_title, game_author, game_release_year, game_avg_duration, game_min_players, game_max_players, game_suggested_age, "user_id", game_id, localisation_id) VALUES
('7Wonders excellent état', 'je loue 7Wonders', 5, 'https://blalbla', '7Wonders', 'Antoine Bauza', 2010, '60 minutes', 2, 7, 8, 5, 4, 15),
('Catan excellent état', 'je loue Catan', 5, 'https://blalbla', 'Catan', 'Klaus Teber', 2005, '55 minutes', 2, 7, 10, 5, 3, 15),
('Risk', 'je loue Risk', 10, 'https://blalbla', 'Risk', 'Albert Lamorisse', 1998, '30 minutes', 3, 5, 5, 7, 5, 4596),
('Colt Express', 'je loue Colt express', 8, 'https://blalbla', 'Colt Express', 'JeSaisPas', 2002, '50 minutes', 3, 6, 10, 2, NULL, 4596),
('Jungle Speed', 'je loue Jungle Speed', 2, 'https://blalbla', 'Jungle Speed', 'Thomas Vuarchex & Pierric Yakovenko',2000, '10 minutes', 2, 160, 6, 1, 6, 4596),
('7Wonders piteux état', 'je loue 7Wonde un truc de ouf qu\il soit encoire là', 5, 'https://blalbla', '7Wonders', 'Antoine Bauza', 2010, '60 minutes', 2, 7, 8, 5, 4, 15),
('7Wonders bon état', 'je loue 7Wonders', 5, 'https://blalbla', '7Wonders', 'Antoine Bauza', 2010, '60 minutes', 2, 7, 8, 5, 4, 15),
('7Wonders ça va ou quoi état', 'je loue 7Wonders', 5, 'https://blalbla', '7Wonders', 'Antoine Bauza', 2010, '60 minutes', 2, 7, 8, 5, 4, 15),
('7Wonders excellent état', 'je loue 7Wonders', 5, 'https://blalbla', '7Wonders', 'Antoine Bauza', 2010, '60 minutes', 2, 1, 4, 5, 4, 15),
('Jungle Speed', 'je loue Jungle Speed', 2, 'https://blalbla', 'Jungle Speed', 'Thomas Vuarchex & Pierric Yakovenko',2000, '10 minutes', 2, 160, 6, 1, 6, 4596),
('Jungle Speed truc de ouf', 'je loue Jungle Speed', 2, 'https://blalbla', 'Jungle Speed', 'Thomas Vuarchex & Pierric Yakovenko',2000, '10 minutes', 2, 160, 6, 1, 6, 4596),
('Jungle Speed c\est le meilleur jeu', 'je loue Jungle Speed car cest le meilleur jeu', 2, 'https://blalbla', 'Jungle Speed', 'Thomas Vuarchex & Pierric Yakovenko',2000, '10 minutes', 2, 160, 6, 1, 6, 4596),
('je vends 7Wonders excellent état', 'je loue 7Wonders', 5, 'https://blalbla', '7Wonders', 'Antoine Bauza', 2010, '60 minutes', 2, 7, 9, 5, 4, 4596);

INSERT INTO advert_has_category (category_id, advert_id) VALUES 
(1, 4),
(5, 4),
(2, 3),
(3, 2),
(6, 2),
(5, 2),
(4, 3),
(4, 4),
(3, 1),
(6, 5),
(1, 3),
(2, 6),
(2, 7),
(2, 8),
(3, 9),
(4, 11),
(5, 12),
(5, 13),
(5, 6),
(6, 7),
(6, 8),
(1, 9),
(1, 10),
(2, 11),
(3, 12),
(4, 13),
(4, 6),
(4, 7),
(5, 8);

INSERT INTO user_has_favourite("user_id", advert_id) VALUES 
(1,4),
(1,2),
(4,3),
(5,1),
(5,3),
(2,5),
(2,1),
(3,4),
(4,1),
(1,5);


INSERT INTO game_has_category(game_id, category_id) VALUES
(5, 4),
(2, 3),
(3, 6),
(6, 2),
(5, 2),
(4, 3),
(4, 4),
(3, 1),
(6, 6),
(1, 6),
(1, 4),
(3, 4),
(2, 5),
(6, 5);

COMMIT;