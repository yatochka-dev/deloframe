// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { Users } from '@/collections/Users'
import { Media } from '@/collections/Media'
import { CallMe } from '@/collections/CallMe'
import { BaseSettings } from '@/globals/settings'
import Parameters from '@/collections/Parameter'
import Categories from '@/collections/Category'
import { HeroSectionSettings } from '@/globals/hero'
import { CalculatorSettings } from '@/globals/calculatorSettings'
import { CalculatorSectionSettings } from '@/globals/calculator'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
export const locales = [
  { code: 'he', label: 'עברית', rtl: true },
  { code: 'ru', label: 'Русский', rtl: false },
] as const

export type LocaleCode = (typeof locales)[number]['code']

export default buildConfig({
  admin: {
    meta: { applicationName: 'DeloFrame', titleSuffix: ' - DeloFrame' },
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, CallMe, Parameters, Categories],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),

  globals: [BaseSettings, CalculatorSettings, HeroSectionSettings, CalculatorSectionSettings],
  sharp,
  localization: {
    // @ts-expect-error
    locales: locales, // required
    defaultLocale: 'ru', // required
  },
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
})
