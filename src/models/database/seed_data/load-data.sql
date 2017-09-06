
COPY users(id, name, password)
FROM '/Users/jiggs/Documents/guildProjects/phase3/weekend_bookstore/src/models/database/seed_data/user-seed-data.csv' DELIMITER ',' CSV HEADER;

COPY books(id, title, author, genre, ISBN)
FROM '/Users/jiggs/Documents/guildProjects/phase3/weekend_bookstore/src/models/database/seed_data/book-seed-data.csv' DELIMITER ',' CSV HEADER;
