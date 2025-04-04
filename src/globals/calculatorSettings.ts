import all from '@/collections/access/all'
import admin from '@/collections/access/admin'
import { GlobalConfig } from 'payload'
import { createFormulaField } from '@/lib/fields'
import descriptionGenerator from '@/lib/description'

const globalDesc = descriptionGenerator(
  'width',
  'length',
  'stories (1 или 2)',
  'totalParameterWeight (сумма веса всех параметров)',
  'totalParameterHeatLoss (сумма теплопотери всех параметров при температуре меньше 9 градусов)',
  'totalParameterHeatLoss39 (сумма теплопотери всех параметров при температуре меньше 39 градусов)',
  'totalParameterPrice (сумма цены всех параметров)',
) as unknown as string

export const CalculatorSettings: GlobalConfig = {
  slug: 'calculatorSettings',
  label: 'Настройки (формулы) калькулятора',
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
          admin: {
            description: globalDesc,
          },
          fields: [
            createFormulaField('oneStory', 'One Story'),
            createFormulaField('twoStories', 'Two Stories'),
          ],
        },
        {
          label: 'Usable Area',
          name: 'usableArea',
          type: 'group',
          admin: {
            description: globalDesc,
          },
          fields: [
            createFormulaField('oneStory', 'One Story'),
            createFormulaField('twoStories', 'Two Stories'),
          ],
        },
        createFormulaField('weight', 'Weight', globalDesc),
        createFormulaField('weightOnTheFoundation', 'Weight On The Foundation', globalDesc),
        createFormulaField('houseHeatLoss', 'Heat Loss', globalDesc),
        createFormulaField(
          'recommendedMinHeatingPower',
          'Recommended Minimum Heating Power',
          globalDesc,
        ),
        createFormulaField('heatingCosts', 'Heating Costs', globalDesc),
        createFormulaField('cost', 'Cost', globalDesc),
        createFormulaField('costPerSquareMeter', 'Cost Per Square Meter', globalDesc),
      ],
    },
  ],
}
