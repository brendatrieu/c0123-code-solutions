SELECT "a"."line1",
  "a"."district",
  "cities"."cityId",
  "cities"."name",
  "countries"."name"
FROM "addresses" AS "a"
JOIN "cities" USING ("cityId")
JOIN "countries" USING ("countryId");
