SELECT "c"."customerId",
  "c"."firstName",
  "c"."lastName",
  "p"."amount"
FROM "customers" AS "c"
JOIN "payments" AS "p" USING ("customerId")
ORDER BY "p"."amount" DESC
LIMIT 10;
