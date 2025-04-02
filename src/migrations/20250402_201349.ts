import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "calculator" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "calculator_locales" (
  	"main_inputs_length" varchar NOT NULL,
  	"main_inputs_width" varchar NOT NULL,
  	"main_inputs_stories_label" varchar NOT NULL,
  	"main_inputs_stories_one_story" varchar NOT NULL,
  	"main_inputs_stories_two_story" varchar NOT NULL,
  	"main_inputs_stories_one_story_p_f" varchar NOT NULL,
  	"main_inputs_stories_two_story_p_f" varchar NOT NULL,
  	"main_buttons_advanced_mode" varchar NOT NULL,
  	"main_buttons_reset" varchar NOT NULL,
  	"main_output_building_area" varchar,
  	"main_output_usable_area" varchar,
  	"main_output_building_weight" varchar,
  	"main_output_weight_on_the_foundation" varchar,
  	"main_output_heat_loss" varchar,
  	"main_output_min_heating_power" varchar,
  	"main_output_heating_costs" varchar,
  	"main_output_price" varchar,
  	"main_output_price_per_sq2" varchar,
  	"main_building_polygon_width" varchar NOT NULL,
  	"main_building_polygon_length" varchar NOT NULL,
  	"main_building_polygon_stories_one_story" varchar NOT NULL,
  	"main_building_polygon_stories_two_story" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  DO $$ BEGIN
   ALTER TABLE "calculator_locales" ADD CONSTRAINT "calculator_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."calculator"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE UNIQUE INDEX IF NOT EXISTS "calculator_locales_locale_parent_id_unique" ON "calculator_locales" USING btree ("_locale","_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "calculator" CASCADE;
  DROP TABLE "calculator_locales" CASCADE;`)
}
