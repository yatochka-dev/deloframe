import { GlobalConfig } from 'payload'
import all from '@/collections/access/all'
import admin from '@/collections/access/admin'

export const BaseSettings: GlobalConfig = {
  slug: 'settings',
  label: 'Site Settings',
  access: {
    read: all,
    update: admin,
    readDrafts: all,
    readVersions: all,
  },
  fields: [
    {
      label: 'Site Name',
      name: 'sitename',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      label: 'Call Us Button Text',
      name: 'callus',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      label: 'Call Us Button Phone Number',
      name: 'phone',
      type: 'text',
      required: true,
      localized: true,
    },
  ],
}
