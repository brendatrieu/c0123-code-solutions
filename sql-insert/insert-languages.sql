INSERT INTO "languages"
  ("name")
VALUES
  ('HTML'),
  ('CSS'),
  ('JavaScript')
RETURNING *;
