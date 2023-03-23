SELECT "f"."title",
  "f"."releaseYear",
  "g"."genre"
FROM "films" AS "f"
JOIN (SELECT "genreId",
  "genres"."name" AS "genre",
  "filmId"
  FROM "genres"
  JOIN "filmGenre"
  USING ("genreId")) AS "g"
USING ("filmId")
WHERE "f"."title" = 'Boogie Amelie';
