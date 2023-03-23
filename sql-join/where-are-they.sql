SELECT "a"."line1",
  "a"."district",
  "c"."cityId",
  "c"."city",
  "c"."country"
FROM "addresses" AS "a"
JOIN (SELECT "cities"."cityId",
  "cities"."name" AS "city",
  "countries"."name" AS "country"
  FROM "cities"
  JOIN "countries" USING ("countryId")) AS "c"
  USING ("cityId");
