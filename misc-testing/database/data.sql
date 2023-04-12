insert into "Users" (
  "username",
  "firstName",
  "lastName",
  "email",
  "password"
) values (
  'johndoe',
  'John',
  'Doe',
  'johndoe@email.com',
  'password'
), (
  'harrypotter',
  'Harry',
  'Potter',
  'harrypotter@hogwarts.com',
  'password'
);

insert into "ExerciseTypes" (
  "type"
) values
  ('Bike'),
  ('Crossfit'),
  ('H.I.I.T'),
  ('Hike'),
  ('Lift Weights'),
  ('Pilates'),
  ('Run'),
  ('Swim'),
  ('Walk'),
  ('Yoga');

insert into "Exercises" (
  "userId",
  "type",
  "date",
  "totalMinutes"
) values (
  '1',
  'Bike',
  '1/10/2023',
  60
), (
  '2',
  'Run',
  '1/11/2023',
  40
);

insert into "Groups" (
  "groupName",
  "betAmount",
  "frequencyReq",
  "intervalReq",
  "durationReq",
  "passQty"
) values (
  'Hogwarts',
  5,
  2,
  7,
  30,
  2
);
