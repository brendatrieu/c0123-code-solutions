SELECT COUNT(*) AS "Total Cities",
  "countries"."name"
FROM "cities"
JOIN "countries"
USING ("countryId")
GROUP BY "countries"."name";
