import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "calculator_settings" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"formulas_building_area_one_story" varchar DEFAULT '(0)' NOT NULL,
  	"formulas_building_area_two_stories" varchar DEFAULT '(0)' NOT NULL,
  	"formulas_usable_area_one_story" varchar DEFAULT '(0)' NOT NULL,
  	"formulas_usable_area_two_stories" varchar DEFAULT '(0)' NOT NULL,
  	"formulas_weight" varchar DEFAULT '(0)' NOT NULL,
  	"formulas_weight_on_the_foundation" varchar DEFAULT '(0)' NOT NULL,
  	"formulas_house_heat_loss" varchar DEFAULT '(0)' NOT NULL,
  	"formulas_recommended_min_heating_power" varchar DEFAULT '(0)' NOT NULL,
  	"formulas_heating_costs" varchar DEFAULT '(0)' NOT NULL,
  	"formulas_cost" varchar DEFAULT '(0)' NOT NULL,
  	"formulas_cost_per_square_meter" varchar DEFAULT '(0)' NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  `)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "calculator_settings" CASCADE;`)
}
