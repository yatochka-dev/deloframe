import { CollectionConfig } from 'payload'
import admin from '@/collections/access/admin'
import all from '@/collections/access/all'
import type { Parameter } from '@/payload-types'

export type ParameterData = Parameter
export type ParameterCat = houseComponentCat & houseOptionCat

export type houseComponentCat = (typeof houseComponents)[number]['value']
export type houseOptionCat = (typeof houseOptions)[number]['value']

export const houseComponents = [
  { label: 'Фундамент', value: 'foundation' },
  { label: 'Внешние стены', value: 'external_walls' },
  { label: 'Внутренние стены', value: 'internal_walls' },
  { label: 'Перегородки', value: 'partitions' },
  { label: 'Междуэтажные перекрытие', value: 'interfloor_slab' },
  { label: 'Утеплённое перекрытие чердака', value: 'insulated_attic_slab' },
  { label: 'Утепленная стропильная система', value: 'insulated_rafter_system' },
  { label: 'Не утепленная стропильная система', value: 'non_insulated_rafter_system' },
  { label: 'Не утеплённые стены фронтонов', value: 'non_insulated_gable_walls' },
  { label: 'Терраса', value: 'terrace' },
  { label: 'Балкон', value: 'balcony' },
  { label: 'Кровля', value: 'roof' },
] as const

export const houseOptions = [
  { label: 'Внешняя отделка фасада', value: 'exterior_finish' },
  { label: 'Внутренняя отделка гипсом', value: 'interior_gypsum_finish' },
  { label: 'Окна', value: 'windows' },
  { label: 'Двери', value: 'doors' },
  { label: 'Черновая электрика', value: 'rough_electrical' },
  { label: 'Сантехника', value: 'plumbing' },
  { label: 'Отопление', value: 'heating' },
  { label: 'Вентиляция', value: 'ventilation' },
  { label: 'Кондиционирование', value: 'air_conditioning' },
  { label: 'Септик', value: 'septic' },
] as const
export const houseComponentsValues = [...houseComponents.map((o) => o.value)] as const
export const houseOptionsValues = [...houseOptions.map((o) => o.value)] as const

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
      type: 'select',
      options: [...houseOptions, ...houseComponents],
      required: true,
    },
    {
      name: 'isUtil',
      label: 'Опция?',
      type: 'checkbox',
      defaultValue: false,
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
