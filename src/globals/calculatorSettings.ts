import all from '@/collections/access/all'
import admin from '@/collections/access/admin'
import { GlobalConfig } from 'payload'
import { createFormulaField } from '@/lib/fields'

export const CalculatorSettings: GlobalConfig = {
  slug: 'calculatorSettings',
  label: 'Calculator Settings',
  admin: {
    description: 'Stores the formulas for the calculator',
  },
  access: {
    read: all,
    update: admin,
    readDrafts: all,
    readVersions: all,
  },
  fields: [
    {
      label: 'Formulas',
      name: 'formulas',
      type: 'group',
      fields: [
        {
          label: 'Building Area',
          name: 'buildingArea',
          type: 'group',
          fields: [
            createFormulaField('oneStory', 'One Story'),
            createFormulaField('twoStories', 'Two Stories'),
          ],
        },
        {
          label: 'Usable Area',
          name: 'usableArea',
          type: 'group',
          fields: [
            createFormulaField('oneStory', 'One Story'),
            createFormulaField('twoStories', 'Two Stories'),
          ],
        },
        createFormulaField('weight', 'Weight'),
        createFormulaField('weightOnTheFoundation', 'Weight On The Foundation'),
        createFormulaField('houseHeatLoss', 'Heat Loss'),
        createFormulaField('recommendedMinHeatingPower', 'Recommended Minimum Heating Power'),
        createFormulaField('heatingCosts', 'Heating Costs'),
        createFormulaField('cost', 'Cost'),
        createFormulaField('costPerSquareMeter', 'Cost Per Square Meter'),
      ],
    },
  ],
}
