set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

CREATE TABLE "public"."Users" (
	"userId" serial NOT NULL,
	"username" TEXT NOT NULL UNIQUE,
	"firstName" TEXT NOT NULL,
	"lastName" TEXT NOT NULL,
	"email" TEXT NOT NULL UNIQUE,
	"password" TEXT NOT NULL,
	CONSTRAINT "Users_pk" PRIMARY KEY ("userId")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "public"."Groups" (
	"groupId" serial NOT NULL,
	"groupName" TEXT NOT NULL,
	"betAmount" int NOT NULL,
	"frequencyReq" int NOT NULL,
	"intervalReq" int NOT NULL,
	"durationReq" int NOT NULL,
	"passQty" int NOT NULL,
	CONSTRAINT "Groups_pk" PRIMARY KEY ("groupId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."Exercises" (
	"exerciseId" serial NOT NULL UNIQUE,
	"userId" int NOT NULL,
	"typeId" serial NOT NULL,
	"type" TEXT NOT NULL,
	"date" DATE NOT NULL,
	"totalMinutes" int NOT NULL,
	CONSTRAINT "Exercises_pk" PRIMARY KEY ("exerciseId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."GroupUsers" (
	"groupId" serial NOT NULL,
	"userId" int NOT NULL,
	"passQty" int NOT NULL,
	"remainingPasses" int NOT NULL,
	CONSTRAINT "GroupUsers_pk" PRIMARY KEY ("groupId", "userId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."Penalties" (
	"groupId" serial NOT NULL,
	"userId" int NOT NULL,
	"date" DATE NOT NULL
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."ExerciseTypes" (
	"typeId" serial NOT NULL,
  "type" TEXT NOT NULL,
	CONSTRAINT "ExerciseTypes_pk" PRIMARY KEY ("typeId")
) WITH (
  OIDS=FALSE
);





ALTER TABLE "Exercises" ADD CONSTRAINT "Exercises_fk0" FOREIGN KEY ("userId") REFERENCES "Users"("userId");
ALTER TABLE "Exercises" ADD CONSTRAINT "Exercises_fk1" FOREIGN KEY ("typeId") REFERENCES "ExerciseTypes"("typeId");

-- ALTER TABLE "GroupUsers" ADD CONSTRAINT "GroupUsers_fk0" FOREIGN KEY ("groupId") REFERENCES "Groups"("groupId");
-- ALTER TABLE "GroupUsers" ADD CONSTRAINT "GroupUsers_fk1" FOREIGN KEY ("userId") REFERENCES "Users"("userId");

ALTER TABLE "Penalties" ADD CONSTRAINT "Penalties_fk0" FOREIGN KEY ("groupId") REFERENCES "Groups"("groupId");
ALTER TABLE "Penalties" ADD CONSTRAINT "Penalties_fk1" FOREIGN KEY ("userId") REFERENCES "Users"("userId");
