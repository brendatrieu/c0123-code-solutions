SELECT "firstName",
  "lastName",
  SUM("payments"."amount") AS "Total Spent"
FROM "customers"
JOIN "payments" USING ("customerId")
GROUP BY "customerId"
ORDER BY "Total Spent" DESC;
