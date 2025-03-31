import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."_locales" AS ENUM('he', 'ru');
  CREATE TABLE IF NOT EXISTS "categories_locales" (
  	"name" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "settings_locales" (
  	"sitename" varchar NOT NULL,
  	"callus" varchar NOT NULL,
  	"phone" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  DO $$ BEGIN
   ALTER TABLE "categories_locales" ADD CONSTRAINT "categories_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "settings_locales" ADD CONSTRAINT "settings_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."settings"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE UNIQUE INDEX IF NOT EXISTS "categories_locales_locale_parent_id_unique" ON "categories_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "settings_locales_locale_parent_id_unique" ON "settings_locales" USING btree ("_locale","_parent_id");
  ALTER TABLE "categories" DROP COLUMN IF EXISTS "name";
  ALTER TABLE "settings" DROP COLUMN IF EXISTS "sitename";
  ALTER TABLE "settings" DROP COLUMN IF EXISTS "callus";
  ALTER TABLE "settings" DROP COLUMN IF EXISTS "phone";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "categories_locales" CASCADE;
  DROP TABLE "settings_locales" CASCADE;
  ALTER TABLE "categories" ADD COLUMN "name" varchar NOT NULL;
  ALTER TABLE "settings" ADD COLUMN "sitename" varchar NOT NULL;
  ALTER TABLE "settings" ADD COLUMN "callus" varchar NOT NULL;
  ALTER TABLE "settings" ADD COLUMN "phone" varchar NOT NULL;
  DROP TYPE "public"."_locales";`)
}
