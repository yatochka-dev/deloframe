import { Field } from 'payload'
import { parse } from 'mathjs'

export const createFormulaField = (
  name: string,
  label: string,
  description?: Element | string,
): Field => {
  const field: Field = {
    name: name,
    label: label,
    type: 'text',
    defaultValue: '(0)',
    required: true,
    admin: {
      description: description as unknown as string,
    },
    validate: (value?: string | null) => {
      const formula = (value ?? '') as string
      if (!formula) {
        return "Can't be empty"
      }
      try {
        if (formula) {
          parse(formula)
        }
        return true // Return data if valid
      } catch (err: any) {
        const errors: { [key: string]: string } = {}

        // @ts-ignore
        return 'Invalid formula awdawd: ' + err?.message ?? err
      }
    },
  }

  return field
}
