SELECT "filmId",
  "title"
FROM films
WHERE "rentalRate" < 1
LIMIT 50;
