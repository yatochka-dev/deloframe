import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "parameters" ALTER COLUMN "category_id" SET NOT NULL;
  ALTER TABLE "categories" ADD COLUMN "is_mandatory" boolean DEFAULT false NOT NULL;
  ALTER TABLE "parameters" DROP COLUMN IF EXISTS "is_util";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "parameters" ALTER COLUMN "category_id" DROP NOT NULL;
  ALTER TABLE "parameters" ADD COLUMN "is_util" boolean DEFAULT false;
  ALTER TABLE "categories" DROP COLUMN IF EXISTS "is_mandatory";`)
}
