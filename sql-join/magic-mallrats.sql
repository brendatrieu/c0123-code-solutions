SELECT "firstName",
  "lastName"
FROM "customers"
WHERE "customerId" IN (
  SELECT "customerId"
FROM "rentals"
JOIN (SELECT "inventoryId"
  FROM "inventory"
  JOIN "films" USING ("filmId")
  WHERE "title" = 'Magic Mallrats') AS "m"
  USING ("inventoryId"));
