import { z } from 'zod'
import { outputSchema } from '@/app/(actions)/schemas'
import { storiesEnum } from '@/shared'

interface Props {
  width: number
  length: number
  stories: z.infer<typeof storiesEnum>
  data: z.infer<typeof outputSchema>
}

export default function generateImage(props: Props) {
  const { width, length, stories, data } = props
}
