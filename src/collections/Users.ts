import type { CollectionConfig } from 'payload'
import admin from '@/collections/access/admin'
import all from '@/collections/access/all'
import block from '@/collections/access/block'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  access: {
    create: admin,
    read: all,
    update: block,
    delete: block,
  },
  auth: true,
  fields: [
    {
      name: 'roles',
      type: 'select',
      hasMany: true,
      saveToJWT: true,
      defaultValue: 'user',
      options: [
        {
          label: 'Admin',
          value: 'admin',
        },
        {
          label: 'User',
          value: 'user',
        },
      ],
    },
    // Email added by default
    // Add more fields as needed
  ],
}
