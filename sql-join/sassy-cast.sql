SELECT "firstName",
  "lastName"
FROM "actors"
JOIN (SELECT "actorId",
  "filmId",
  "title"
  FROM "castMembers"
  JOIN "films"
  USING ("filmId")
  WHERE "title" = 'Jersey Sassy') as "c"
  USING ("actorId");
