import { GlobalConfig } from 'payload'
import all from '@/collections/access/all'
import admin from '@/collections/access/admin'

export const CalculatorSectionSettings: GlobalConfig = {
  slug: 'calculator',
  label: 'Calculator Section',
  access: {
    read: all,
    update: admin,
    readDrafts: all,
    readVersions: all,
  },
  fields: [
    {
      label: 'Main',
      name: 'main',
      type: 'group',
      fields: [
        {
          name: 'inputs',
          label: 'Inputs',
          type: 'group',
          fields: [
            {
              name: 'length',
              label: 'Length',
              type: 'text',
              required: true,
              localized: true,
            },
            {
              name: 'width',
              label: 'Width',
              type: 'text',
              required: true,
              localized: true,
            },
            {
              name: 'stories',
              label: 'Stories',
              type: 'group',
              localized: true,
              fields: [
                {
                  name: 'label',
                  label: 'Label',
                  type: 'text',
                  required: true,
                  localized: true,
                },
                {
                  name: 'oneStory',
                  label: 'One Story',
                  type: 'text',
                  required: true,
                  localized: true,
                },
                {
                  name: 'twoStory',
                  label: 'Two Story',
                  type: 'text',
                  required: true,
                  localized: true,
                },
                {
                  name: 'oneStoryPF',
                  label: 'One Story PF',
                  type: 'text',
                  required: true,
                  localized: true,
                },
                {
                  name: 'twoStoryPF',
                  label: 'Two Story PF',
                  type: 'text',
                  required: true,
                  localized: true,
                },
              ],
            },
          ],
        },
        {
          name: 'buttons',
          label: 'Buttons',
          type: 'group',
          fields: [
            {
              name: 'advancedMode',
              label: 'Advanced Mode',
              type: 'text',
              required: true,
              localized: true,
            },
            {
              name: 'reset',
              label: 'Reset',
              type: 'text',
              required: true,
              localized: true,
            },
          ],
        },
        {
          name: 'output',
          label: 'Output',
          type: 'group',
          fields: [
            {
              name: 'buildingArea',
              label: 'Building Area',
              type: 'text',
              localized: true,
              required: true,
            },
            {
              name: 'usableArea',
              label: 'Usable Area',
              type: 'text',
              localized: true,
              required: true,
            },
            {
              name: 'buildingWeight',
              label: 'Building Weight',
              type: 'text',
              localized: true,
              required: true,
            },
            {
              name: 'weightOnTheFoundation',
              label: 'Weight on the Foundation',
              type: 'text',
              localized: true,
              required: true,
            },
            {
              name: 'heatLoss',
              label: 'Heat Loss',
              type: 'text',
              localized: true,
              required: true,
            },
            {
              name: 'minHeatingPower',
              label: 'Min Heating Power',
              type: 'text',
              localized: true,
              required: true,
            },
            {
              name: 'heatingCosts',
              label: 'Heating Costs',
              type: 'text',
              localized: true,
              required: true,
            },
            {
              name: 'price',
              label: 'Price',
              type: 'text',
              localized: true,
              required: true,
            },
            {
              name: 'pricePerSq2',
              label: 'Price per sq^2',
              type: 'text',
              localized: true,
              required: true,
            },
          ],
        },
        {
          name: 'buildingPolygon',
          label: 'Building Polygon',
          type: 'group',
          fields: [
            {
              name: 'width',
              label: 'Width',
              type: 'text',
              admin: { description: '$$ -- the width of the building in meters' },
              required: true,
              localized: true,
              validate: (value?: string | null) =>
                value?.includes('$$') ? true : "Should include '$$'",
            },
            {
              name: 'length',
              label: 'Length',
              type: 'text',
              admin: { description: '$$ -- the width of the building in meters' },
              required: true,
              localized: true,
              validate: (value?: string | null) =>
                value?.includes('$$') ? true : "Should include '$$'",
            },
            {
              name: 'stories',
              label: 'Stories',
              type: 'group',
              fields: [
                {
                  name: 'oneStory',
                  label: 'One Story',
                  type: 'text',
                  localized: true,
                  required: true,
                },
                {
                  name: 'twoStory',
                  label: 'Two Story',
                  type: 'text',
                  localized: true,
                  required: true,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
