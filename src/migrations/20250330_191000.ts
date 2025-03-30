import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "categories" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "parameters" ADD COLUMN "category_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "categories_id" integer;
  CREATE INDEX IF NOT EXISTS "categories_updated_at_idx" ON "categories" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "categories_created_at_idx" ON "categories" USING btree ("created_at");
  DO $$ BEGIN
   ALTER TABLE "parameters" ADD CONSTRAINT "parameters_category_id_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "parameters_category_idx" ON "parameters" USING btree ("category_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_categories_id_idx" ON "payload_locked_documents_rels" USING btree ("categories_id");
  ALTER TABLE "parameters" DROP COLUMN IF EXISTS "category";
  DROP TYPE "public"."enum_parameters_category";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_parameters_category" AS ENUM('exterior_finish', 'interior_gypsum_finish', 'windows', 'doors', 'rough_electrical', 'plumbing', 'heating', 'ventilation', 'air_conditioning', 'septic', 'foundation', 'external_walls', 'internal_walls', 'partitions', 'interfloor_slab', 'insulated_attic_slab', 'insulated_rafter_system', 'non_insulated_rafter_system', 'non_insulated_gable_walls', 'terrace', 'balcony', 'roof');
  ALTER TABLE "categories" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "categories" CASCADE;
  ALTER TABLE "parameters" DROP CONSTRAINT "parameters_category_id_categories_id_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_categories_fk";
  
  DROP INDEX IF EXISTS "parameters_category_idx";
  DROP INDEX IF EXISTS "payload_locked_documents_rels_categories_id_idx";
  ALTER TABLE "parameters" ADD COLUMN "category" "enum_parameters_category" NOT NULL;
  ALTER TABLE "parameters" DROP COLUMN IF EXISTS "category_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "categories_id";`)
}
