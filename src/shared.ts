import { z } from 'zod'
export const permissibleStoriesValues = ['1', '2', '1pf', '2pf'] as const
const storiesEnum = z.enum(permissibleStoriesValues)
const localesEnum = z.enum(['ru', 'he']).default('ru')
export { storiesEnum, localesEnum }
export const decode = {
  '1': 'oneStory',
  '2': 'twoStory',
  '1pf': 'oneStoryPF',
  '2pf': 'twoStoryPF',
} as const
