SELECT "firstName",
  "lastName"
FROM "actors"
JOIN "castMembers"
USING ("actorId")
JOIN "films"
USING ("filmId")
WHERE "title" = 'Jersey Sassy';
