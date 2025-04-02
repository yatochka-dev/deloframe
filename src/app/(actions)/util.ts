import { getPayload } from 'payload'
import config from '@payload-config'

export async function fetchCalculatorSettings() {
  const payload = await getPayload({ config })
  const settings = await payload.findGlobal({
    slug: 'calculatorSettings',
  })
  // @todo implement caching prob
  return settings
}
