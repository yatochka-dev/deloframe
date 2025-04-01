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
      label: 'Primary Group Label',
      name: 'primaryGroup',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      label: 'Home Link Label',
      name: 'homeLink',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      label: 'Calculator Link Label',
      name: 'calculatorLink',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      label: 'Secondary Group Label',
      name: 'secondaryGroup',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      label: 'Language Switcher Label',
      name: 'languageSwitcher',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      label: 'Theme Switcher Label',
      name: 'themeSwitcher',
      type: 'text',
      required: true,
      localized: true,
    },
  ],
}
