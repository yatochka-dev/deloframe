import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "calculator_locales" ALTER COLUMN "main_inputs_length" SET DEFAULT '0';
  ALTER TABLE "calculator_locales" ALTER COLUMN "main_inputs_width" SET DEFAULT '0';
  ALTER TABLE "calculator_locales" ALTER COLUMN "main_inputs_stories_label" SET DEFAULT 'Default Label';
  ALTER TABLE "calculator_locales" ALTER COLUMN "main_inputs_stories_one_story" SET DEFAULT 'Default One Story';
  ALTER TABLE "calculator_locales" ALTER COLUMN "main_inputs_stories_two_story" SET DEFAULT 'Default Two Story';
  ALTER TABLE "calculator_locales" ALTER COLUMN "main_inputs_stories_one_story_p_f" SET DEFAULT 'Default One Story PF';
  ALTER TABLE "calculator_locales" ALTER COLUMN "main_inputs_stories_two_story_p_f" SET DEFAULT 'Default Two Story PF';
  ALTER TABLE "calculator_locales" ALTER COLUMN "main_buttons_advanced_mode" SET DEFAULT 'Default Advanced Mode';
  ALTER TABLE "calculator_locales" ALTER COLUMN "main_buttons_reset" SET DEFAULT 'Default Reset';
  ALTER TABLE "calculator_locales" ALTER COLUMN "main_output_building_area" SET DEFAULT 'Default Building Area';
  ALTER TABLE "calculator_locales" ALTER COLUMN "main_output_usable_area" SET DEFAULT 'Default Usable Area';
  ALTER TABLE "calculator_locales" ALTER COLUMN "main_output_building_weight" SET DEFAULT 'Default Building Weight';
  ALTER TABLE "calculator_locales" ALTER COLUMN "main_output_weight_on_the_foundation" SET DEFAULT 'Default Weight on the Foundation';
  ALTER TABLE "calculator_locales" ALTER COLUMN "main_output_heat_loss" SET DEFAULT 'Default Heat Loss';
  ALTER TABLE "calculator_locales" ALTER COLUMN "main_output_min_heating_power" SET DEFAULT 'Default Min Heating Power';
  ALTER TABLE "calculator_locales" ALTER COLUMN "main_output_heating_costs" SET DEFAULT 'Default Heating Costs';
  ALTER TABLE "calculator_locales" ALTER COLUMN "main_output_price" SET DEFAULT 'Default Price';
  ALTER TABLE "calculator_locales" ALTER COLUMN "main_output_price_per_sq2" SET DEFAULT 'Default Price per sq^2';
  ALTER TABLE "calculator_locales" ALTER COLUMN "main_building_polygon_width" SET DEFAULT '0 $$';
  ALTER TABLE "calculator_locales" ALTER COLUMN "main_building_polygon_length" SET DEFAULT '0 $$';
  ALTER TABLE "calculator_locales" ALTER COLUMN "main_building_polygon_stories_one_story" SET DEFAULT 'Default One Story';
  ALTER TABLE "calculator_locales" ALTER COLUMN "main_building_polygon_stories_two_story" SET DEFAULT 'Default Two Story';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "calculator_locales" ALTER COLUMN "main_inputs_length" DROP DEFAULT;
  ALTER TABLE "calculator_locales" ALTER COLUMN "main_inputs_width" DROP DEFAULT;
  ALTER TABLE "calculator_locales" ALTER COLUMN "main_inputs_stories_label" DROP DEFAULT;
  ALTER TABLE "calculator_locales" ALTER COLUMN "main_inputs_stories_one_story" DROP DEFAULT;
  ALTER TABLE "calculator_locales" ALTER COLUMN "main_inputs_stories_two_story" DROP DEFAULT;
  ALTER TABLE "calculator_locales" ALTER COLUMN "main_inputs_stories_one_story_p_f" DROP DEFAULT;
  ALTER TABLE "calculator_locales" ALTER COLUMN "main_inputs_stories_two_story_p_f" DROP DEFAULT;
  ALTER TABLE "calculator_locales" ALTER COLUMN "main_buttons_advanced_mode" DROP DEFAULT;
  ALTER TABLE "calculator_locales" ALTER COLUMN "main_buttons_reset" DROP DEFAULT;
  ALTER TABLE "calculator_locales" ALTER COLUMN "main_output_building_area" DROP DEFAULT;
  ALTER TABLE "calculator_locales" ALTER COLUMN "main_output_usable_area" DROP DEFAULT;
  ALTER TABLE "calculator_locales" ALTER COLUMN "main_output_building_weight" DROP DEFAULT;
  ALTER TABLE "calculator_locales" ALTER COLUMN "main_output_weight_on_the_foundation" DROP DEFAULT;
  ALTER TABLE "calculator_locales" ALTER COLUMN "main_output_heat_loss" DROP DEFAULT;
  ALTER TABLE "calculator_locales" ALTER COLUMN "main_output_min_heating_power" DROP DEFAULT;
  ALTER TABLE "calculator_locales" ALTER COLUMN "main_output_heating_costs" DROP DEFAULT;
  ALTER TABLE "calculator_locales" ALTER COLUMN "main_output_price" DROP DEFAULT;
  ALTER TABLE "calculator_locales" ALTER COLUMN "main_output_price_per_sq2" DROP DEFAULT;
  ALTER TABLE "calculator_locales" ALTER COLUMN "main_building_polygon_width" DROP DEFAULT;
  ALTER TABLE "calculator_locales" ALTER COLUMN "main_building_polygon_length" DROP DEFAULT;
  ALTER TABLE "calculator_locales" ALTER COLUMN "main_building_polygon_stories_one_story" DROP DEFAULT;
  ALTER TABLE "calculator_locales" ALTER COLUMN "main_building_polygon_stories_two_story" DROP DEFAULT;`)
}
