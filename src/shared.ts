import { z } from 'zod'

const storiesEnum = z.enum(['1', '2'])
const localesEnum = z.enum(['ru', 'he']).default('ru')
export { storiesEnum, localesEnum }
