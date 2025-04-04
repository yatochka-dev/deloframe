import { CollectionConfig } from 'payload'
import admin from '@/collections/access/admin'
import all from '@/collections/access/all'
import type { Category, Parameter } from '@/payload-types'
import { createFormulaField } from '@/lib/fields'
import descriptionGenerator from '@/lib/description'

export type ParameterData = Parameter & {
  category: Category
}

export type CategoryID = number

export const Parameters: CollectionConfig = {
  slug: 'parameters',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: all,
    update: admin,
    create: admin,
    delete: admin,
  },
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    },
    {
      name: 'category',
      label: 'Category',
      type: 'relationship',
      relationTo: 'categories',
      required: true,
    },
    {
      name: 'pricePer',
      label: 'Price Per',
      type: 'number',
      required: true,
    },
    {
      name: 'weight',
      label: 'Weight',
      type: 'number',
      required: true,
    },
    {
      name: 'heatLoss',
      label: 'Heat Loss',
      type: 'number',
      required: true,
    },
    {
      name: 'matrices',
      label: 'Matrices',
      type: 'group',
      fields: [
        {
          name: 'amount',
          label: 'Amount',
          type: 'group',
          admin: {
            description: descriptionGenerator('width', 'length'),
          },
          fields: [
            createFormulaField('oneStory', 'One Story'),
            createFormulaField('twoStory', 'Two Story'),
            createFormulaField('oneStoryPF', 'One Story/PF'),
            createFormulaField('twoStoryPF', 'Two Story/PF'),
          ],
        },
        {
          name: 'price',
          label: 'Price',
          admin: {
            description: descriptionGenerator(
              'amount',
              'width',
              'length',
              'price',
              'weight',
              'heatLoss',
            ),
          },
          type: 'group',
          fields: [
            createFormulaField('oneStory', 'One Story'),
            createFormulaField('twoStory', 'Two Story'),
            createFormulaField('oneStoryPF', 'One Story/PF'),
            createFormulaField('twoStoryPF', 'Two Story/PF'),
          ],
        },
        {
          name: 'weight',
          label: 'Weight',
          type: 'group',
          admin: {
            description: descriptionGenerator(
              'amount',
              'width',
              'length',
              'price',
              'weight',
              'heatLoss',
            ),
          },
          fields: [
            createFormulaField('oneStory', 'One Story'),
            createFormulaField('twoStory', 'Two Story'),
            createFormulaField('oneStoryPF', 'One Story/PF'),
            createFormulaField('twoStoryPF', 'Two Story/PF'),
          ],
        },
        {
          name: 'heatLoss',
          label: 'Heat Loss',
          type: 'group',
          admin: {
            description: descriptionGenerator(
              'amount',
              'width',
              'length',
              'price',
              'weight',
              'heatLoss',
            ),
          },
          fields: [
            {
              name: 'below9deg',
              label: 'Below 9 Degrees',
              type: 'group',
              fields: [
                createFormulaField('oneStory', 'One Story'),
                createFormulaField('twoStory', 'Two Story'),
                createFormulaField('oneStoryPF', 'One Story/PF'),
                createFormulaField('twoStoryPF', 'Two Story/PF'),
              ],
            },
            {
              name: 'below39deg',
              label: 'Below 39 Degrees',
              type: 'group',
              fields: [
                createFormulaField('oneStory', 'One Story'),
                createFormulaField('twoStory', 'Two Story'),
                createFormulaField('oneStoryPF', 'One Story/PF'),
                createFormulaField('twoStoryPF', 'Two Story/PF'),
              ],
            },
          ],
        },
      ],
    },
  ],
}

export default Parameters
