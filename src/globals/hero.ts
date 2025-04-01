import { GlobalConfig } from 'payload'
import all from '@/collections/access/all'
import admin from '@/collections/access/admin'

export const HeroSectionSettings: GlobalConfig = {
  slug: 'herosection',
  label: 'Hero Section',
  access: {
    read: all,
    update: admin,
    readDrafts: all,
    readVersions: all,
  },
  fields: [
    {
      label: 'Title',
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      label: 'Subtitle',
      name: 'subtitle',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      label: 'Call To Action',
      name: 'cta',
      type: 'text',
      required: true,
      localized: true,
    },
  ],
}
