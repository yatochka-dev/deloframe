import { CollectionConfig } from 'payload'

const Categories: CollectionConfig = {
  slug: 'categories', // The URL slug for this collection
  labels: {
    singular: 'Category',
    plural: 'Categories',
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true, // This makes the name field mandatory
      label: 'Category Name',
    },
    {
      name: 'isMandatory',
      type: 'checkbox',
      defaultValue: false,
      required: true,
      label: 'Is Mandatory?',
    },
  ],
}

export default Categories
