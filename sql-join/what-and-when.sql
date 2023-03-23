SELECT "f"."title",
  "f"."releaseYear",
  "genres"."name"
FROM "films" AS "f"
JOIN "filmGenre" USING ("filmId")
JOIN "genres" USING ("genreId")
WHERE "f"."title" = 'Boogie Amelie';
