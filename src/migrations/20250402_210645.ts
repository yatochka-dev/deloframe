import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
  CREATE TYPE "public"."enum_users_roles" AS ENUM('admin', 'user');
  CREATE TABLE IF NOT EXISTS "users_roles" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_users_roles",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE IF NOT EXISTS "call_me" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"phone" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "parameters" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"category_id" integer NOT NULL,
  	"price_per" numeric NOT NULL,
  	"weight" numeric NOT NULL,
  	"heat_loss" numeric NOT NULL,
  	"matrices_amount_one_story" varchar DEFAULT '(0)' NOT NULL,
  	"matrices_amount_two_story" varchar DEFAULT '(0)' NOT NULL,
  	"matrices_amount_one_story_p_f" varchar DEFAULT '(0)' NOT NULL,
  	"matrices_amount_two_story_p_f" varchar DEFAULT '(0)' NOT NULL,
  	"matrices_price_one_story" varchar DEFAULT '(0)' NOT NULL,
  	"matrices_price_two_story" varchar DEFAULT '(0)' NOT NULL,
  	"matrices_price_one_story_p_f" varchar DEFAULT '(0)' NOT NULL,
  	"matrices_price_two_story_p_f" varchar DEFAULT '(0)' NOT NULL,
  	"matrices_weight_one_story" varchar DEFAULT '(0)' NOT NULL,
  	"matrices_weight_two_story" varchar DEFAULT '(0)' NOT NULL,
  	"matrices_weight_one_story_p_f" varchar DEFAULT '(0)' NOT NULL,
  	"matrices_weight_two_story_p_f" varchar DEFAULT '(0)' NOT NULL,
  	"matrices_heat_loss_below9deg_one_story" varchar DEFAULT '(0)' NOT NULL,
  	"matrices_heat_loss_below9deg_two_story" varchar DEFAULT '(0)' NOT NULL,
  	"matrices_heat_loss_below9deg_one_story_p_f" varchar DEFAULT '(0)' NOT NULL,
  	"matrices_heat_loss_below9deg_two_story_p_f" varchar DEFAULT '(0)' NOT NULL,
  	"matrices_heat_loss_below39deg_one_story" varchar DEFAULT '(0)' NOT NULL,
  	"matrices_heat_loss_below39deg_two_story" varchar DEFAULT '(0)' NOT NULL,
  	"matrices_heat_loss_below39deg_one_story_p_f" varchar DEFAULT '(0)' NOT NULL,
  	"matrices_heat_loss_below39deg_two_story_p_f" varchar DEFAULT '(0)' NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "categories" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"is_mandatory" boolean DEFAULT false NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "categories_locales" (
  	"name" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer,
  	"media_id" integer,
  	"call_me_id" integer,
  	"parameters_id" integer,
  	"categories_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "settings" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "settings_locales" (
  	"primary_group" varchar NOT NULL,
  	"home_link" varchar NOT NULL,
  	"calculator_link" varchar NOT NULL,
  	"secondary_group" varchar NOT NULL,
  	"language_switcher" varchar NOT NULL,
  	"theme_switcher" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "herosection" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "herosection_locales" (
  	"title" varchar NOT NULL,
  	"subtitle" varchar NOT NULL,
  	"cta" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
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
  	"main_output_building_area" varchar NOT NULL,
  	"main_output_usable_area" varchar NOT NULL,
  	"main_output_building_weight" varchar NOT NULL,
  	"main_output_weight_on_the_foundation" varchar NOT NULL,
  	"main_output_heat_loss" varchar NOT NULL,
  	"main_output_min_heating_power" varchar NOT NULL,
  	"main_output_heating_costs" varchar NOT NULL,
  	"main_output_price" varchar NOT NULL,
  	"main_output_price_per_sq2" varchar NOT NULL,
  	"main_building_polygon_width" varchar NOT NULL,
  	"main_building_polygon_length" varchar NOT NULL,
  	"main_building_polygon_stories_one_story" varchar NOT NULL,
  	"main_building_polygon_stories_two_story" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  DO $$ BEGIN
   ALTER TABLE "users_roles" ADD CONSTRAINT "users_roles_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "parameters" ADD CONSTRAINT "parameters_category_id_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "categories_locales" ADD CONSTRAINT "categories_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_call_me_fk" FOREIGN KEY ("call_me_id") REFERENCES "public"."call_me"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parameters_fk" FOREIGN KEY ("parameters_id") REFERENCES "public"."parameters"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "settings_locales" ADD CONSTRAINT "settings_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."settings"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "herosection_locales" ADD CONSTRAINT "herosection_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."herosection"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "calculator_locales" ADD CONSTRAINT "calculator_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."calculator"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "users_roles_order_idx" ON "users_roles" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "users_roles_parent_idx" ON "users_roles" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX IF NOT EXISTS "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX IF NOT EXISTS "call_me_updated_at_idx" ON "call_me" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "call_me_created_at_idx" ON "call_me" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "parameters_category_idx" ON "parameters" USING btree ("category_id");
  CREATE INDEX IF NOT EXISTS "parameters_updated_at_idx" ON "parameters" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "parameters_created_at_idx" ON "parameters" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "categories_updated_at_idx" ON "categories" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "categories_created_at_idx" ON "categories" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "categories_locales_locale_parent_id_unique" ON "categories_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_call_me_id_idx" ON "payload_locked_documents_rels" USING btree ("call_me_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_parameters_id_idx" ON "payload_locked_documents_rels" USING btree ("parameters_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_categories_id_idx" ON "payload_locked_documents_rels" USING btree ("categories_id");
  CREATE INDEX IF NOT EXISTS "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX IF NOT EXISTS "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "settings_locales_locale_parent_id_unique" ON "settings_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "herosection_locales_locale_parent_id_unique" ON "herosection_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "calculator_locales_locale_parent_id_unique" ON "calculator_locales" USING btree ("_locale","_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "users_roles" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "call_me" CASCADE;
  DROP TABLE "parameters" CASCADE;
  DROP TABLE "categories" CASCADE;
  DROP TABLE "categories_locales" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "settings" CASCADE;
  DROP TABLE "settings_locales" CASCADE;
  DROP TABLE "herosection" CASCADE;
  DROP TABLE "herosection_locales" CASCADE;
  DROP TABLE "calculator_settings" CASCADE;
  DROP TABLE "calculator" CASCADE;
  DROP TABLE "calculator_locales" CASCADE;
  DROP TYPE "public"."_locales";
  DROP TYPE "public"."enum_users_roles";`)
}
