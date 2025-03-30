import { CollectionConfig } from 'payload'
import admin from '@/collections/access/admin'
import all from '@/collections/access/all'
import type { Category, Parameter } from '@/payload-types'

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

          fields: [
            {
              name: 'oneStory',
              label: 'One Story',
              type: 'text',
              required: true,
              defaultValue: '(0)',
            },
            {
              name: 'twoStory',
              label: 'Two Story',
              type: 'text',
              required: true,
              defaultValue: '(0)',
            },
            {
              name: 'oneStoryPF',
              label: 'One Story/PF',
              type: 'text',
              required: true,
              defaultValue: '(0)',
            },
            {
              name: 'twoStoryPF',
              label: 'Two Story/PF',
              type: 'text',
              required: true,
              defaultValue: '(0)',
            },
          ],
        },
        {
          name: 'price',
          label: 'Price',
          type: 'group',

          fields: [
            {
              name: 'oneStory',
              label: 'One Story',
              type: 'text',
              required: true,
              defaultValue: '(0)',
            },
            {
              name: 'twoStory',
              label: 'Two Story',
              type: 'text',
              required: true,
              defaultValue: '(0)',
            },
            {
              name: 'oneStoryPF',
              label: 'One Story/PF',
              type: 'text',
              required: true,
              defaultValue: '(0)',
            },
            {
              name: 'twoStoryPF',
              label: 'Two Story/PF',
              type: 'text',
              required: true,
              defaultValue: '(0)',
            },
          ],
        },
        {
          name: 'weight',
          label: 'Weight',
          type: 'group',

          fields: [
            {
              name: 'oneStory',
              label: 'One Story',
              type: 'text',
              required: true,
              defaultValue: '(0)',
            },
            {
              name: 'twoStory',
              label: 'Two Story',
              type: 'text',
              required: true,
              defaultValue: '(0)',
            },
            {
              name: 'oneStoryPF',
              label: 'One Story/PF',
              type: 'text',
              required: true,
              defaultValue: '(0)',
            },
            {
              name: 'twoStoryPF',
              label: 'Two Story/PF',
              type: 'text',
              required: true,
              defaultValue: '(0)',
            },
          ],
        },
        {
          name: 'heatLoss',
          label: 'Heat Loss',
          type: 'group',

          fields: [
            {
              name: 'below9deg',
              label: 'Below 9 Degrees',
              type: 'group',
              fields: [
                {
                  name: 'oneStory',
                  label: 'One Story',
                  type: 'text',
                  required: true,
                  defaultValue: '(0)',
                },
                {
                  name: 'twoStory',
                  label: 'Two Story',
                  type: 'text',
                  required: true,
                  defaultValue: '(0)',
                },
                {
                  name: 'oneStoryPF',
                  label: 'One Story/PF',
                  type: 'text',
                  required: true,
                  defaultValue: '(0)',
                },
                {
                  name: 'twoStoryPF',
                  label: 'Two Story/PF',
                  type: 'text',
                  required: true,
                  defaultValue: '(0)',
                },
              ],
            },
            {
              name: 'below39deg',
              label: 'Below 39 Degrees',
              type: 'group',
              fields: [
                {
                  name: 'oneStory',
                  label: 'One Story',
                  type: 'text',
                  required: true,
                  defaultValue: '(0)',
                },
                {
                  name: 'twoStory',
                  label: 'Two Story',
                  type: 'text',
                  required: true,
                  defaultValue: '(0)',
                },
                {
                  name: 'oneStoryPF',
                  label: 'One Story/PF',
                  type: 'text',
                  required: true,
                  defaultValue: '(0)',
                },
                {
                  name: 'twoStoryPF',
                  label: 'Two Story/PF',
                  type: 'text',
                  required: true,
                  defaultValue: '(0)',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}

export default Parameters
