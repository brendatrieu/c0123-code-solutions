SELECT "genres"."name",
  COUNT("films".*) AS "Total Films"
FROM "genres"
JOIN "filmGenre" USING ("genreId")
JOIN "films" USING ("filmId")
JOIN "castMembers" USING ("filmId")
JOIN "actors" USING ("actorId")
WHERE "firstName" = 'Lisa'
  AND "lastName" = 'Monroe'
GROUP BY "genres"."name";
