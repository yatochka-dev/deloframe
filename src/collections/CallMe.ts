import type { CollectionConfig } from 'payload'
import all from '@/collections/access/all'
import admin from '@/collections/access/admin'
import block from '@/collections/access/block'

export const CallMe: CollectionConfig = {
  slug: 'call-me',
  access: {
    read: admin,
    create: all,
    update: block,
    delete: block,
  },
  admin: {
    useAsTitle: 'phone',
  },
  fields: [
    {
      name: 'phone',
      type: 'text',
      required: true,
    },
  ],
}
