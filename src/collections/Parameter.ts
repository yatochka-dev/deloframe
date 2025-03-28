import { CollectionConfig } from 'payload';
import admin from '@/collections/access/admin';
import all from '@/collections/access/all';
import type { Parameter  } from "@/payload-types";

export type ParameterData = Parameter;
export type ParameterCat =
    | 'foundation'
    | 'wall-structure'
    | 'floor-ceiling-structure'
    | 'roof-framing'
    | 'roofing'
    | 'interior-finishing'
    | 'windows'
    | 'utilities';

const parameterCategories = [
    'foundation',
    'wall-structure',
    'floor-ceiling-structure',
    'roof-framing',
    'roofing',
    'interior-finishing',
    'windows',
    'utilities'
]

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
            name: 'cat',
            label: 'Category',
            type: 'select',
            options: [
                { label: 'Foundation', value: 'foundation' },
                { label: 'Wall Structure', value: 'wall-structure' },
                { label: 'Floor/Ceiling Structure', value: 'floor-ceiling-structure' },
                { label: 'Roof Framing', value: 'roof-framing' },
                { label: 'Roofing', value: 'roofing' },
                { label: 'Interior Finishing', value: 'interior-finishing' },
                { label: 'Windows', value: 'windows' },
                { label: 'Utilities', value: 'utilities' },
            ],
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
                        { name: 'oneStory', label: 'One Story', type: 'text', required: true, defaultValue: "(0)" },
                        { name: 'twoStory', label: 'Two Story', type: 'text' , required: true, defaultValue: "(0)"},
                        { name: 'oneStoryPF', label: 'One Story/PF', type: 'text' , required: true, defaultValue: "(0)"},
                        { name: 'twoStoryPF', label: 'Two Story/PF', type: 'text' , required: true, defaultValue: "(0)"},
                    ],
                },
                {
                    name: 'price',
                    label: 'Price',
                    type: 'group',

                    fields: [
                        { name: 'oneStory', label: 'One Story', type: 'text' , required: true, defaultValue: "(0)"},
                        { name: 'twoStory', label: 'Two Story', type: 'text' , required: true, defaultValue: "(0)"},
                        { name: 'oneStoryPF', label: 'One Story/PF', type: 'text' , required: true, defaultValue: "(0)"},
                        { name: 'twoStoryPF', label: 'Two Story/PF', type: 'text' , required: true, defaultValue: "(0)"},
                    ],
                },
                {
                    name: 'weight',
                    label: 'Weight',
                    type: 'group',

                    fields: [
                        { name: 'oneStory', label: 'One Story', type: 'text' , required: true, defaultValue: "(0)"},
                        { name: 'twoStory', label: 'Two Story', type: 'text' , required: true, defaultValue: "(0)"},
                        { name: 'oneStoryPF', label: 'One Story/PF', type: 'text', required: true, defaultValue: "(0)" },
                        { name: 'twoStoryPF', label: 'Two Story/PF', type: 'text' , required: true, defaultValue: "(0)"},
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
                                { name: 'oneStory', label: 'One Story', type: 'text' , required: true, defaultValue: "(0)"},
                                { name: 'twoStory', label: 'Two Story', type: 'text', required: true, defaultValue: "(0)" },
                                { name: 'oneStoryPF', label: 'One Story/PF', type: 'text', required: true, defaultValue: "(0)" },
                                { name: 'twoStoryPF', label: 'Two Story/PF', type: 'text' , required: true, defaultValue: "(0)"},
                            ],
                        },
                        {
                            name: 'below39deg',
                            label: 'Below 39 Degrees',
                            type: 'group',
                            fields: [
                                { name: 'oneStory', label: 'One Story', type: 'text' , required: true, defaultValue: "(0)"},
                                { name: 'twoStory', label: 'Two Story', type: 'text' , required: true, defaultValue: "(0)"},
                                { name: 'oneStoryPF', label: 'One Story/PF', type: 'text', required: true, defaultValue: "(0)" },
                                { name: 'twoStoryPF', label: 'Two Story/PF', type: 'text', required: true, defaultValue: "(0)" },
                            ],
                        },
                    ],
                },
            ],
        },
    ],

};

export default Parameters;
