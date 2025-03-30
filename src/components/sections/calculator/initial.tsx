'use client'
import React from 'react'
import useCalcStore, { permissibleStoriesValues } from '@/stores/calc'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { z } from 'zod'
import { useForm, Controller, Control } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input'
import { storiesEnum } from '@/shared'

const schema = z.object({
  stories: storiesEnum,
  width: z.number().min(0.5).max(10000),
  length: z.number().min(0.5).max(10000),
})

type InitialInputValues = {
  stories: 1 | 2
  width: number
  length: number
}

const InitialInputs = () => {
  const calc = useCalcStore()
  const form = useForm<InitialInputValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      stories: calc.initialInput.stories,
      width: calc.initialInput.width,
      length: calc.initialInput.length,
    },
  })

  form.watch((value) => {
    calc.updateInitialInput(value)
  })

  return (
    <Form {...form}>
      <form className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'}>
        <StoriesField control={form.control} />
        <NumberField name="width" label="Width" control={form.control} />
        <NumberField name="length" label="Length" control={form.control} />
      </form>
    </Form>
  )
}

const StoriesField = ({ control }: { control: Control<InitialInputValues> }) => (
  <FormField
    render={({ field }) => (
      <FormItem>
        <FormLabel>Stories</FormLabel>
        <FormControl>
          <Select onValueChange={field.onChange} defaultValue={field.value.toString()}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Stories" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {permissibleStoriesValues.map((value) => (
                  <SelectItem value={value.toString()} key={`${value}-stories`}>
                    {value} stories
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </FormControl>
        {/*<FormDescription>No Desc</FormDescription>*/}
        <FormMessage />
      </FormItem>
    )}
    name={'stories'}
    control={control}
  />
)

const NumberField = ({
  name,
  label,
  control,
}: {
  name: keyof InitialInputValues
  label: string
  control: Control<InitialInputValues>
}) => (
  <FormField
    name={name}
    control={control}
    render={() => (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <Controller
            name={name}
            control={control}
            render={({ field }) => (
              <Input
                type="number"
                {...field}
                placeholder={label}
                onChange={(e) => handleNumberChange(e, field)}
              />
            )}
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
)

const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>, field: any) => {
  const newValue = e.target.value === '' ? 0 : parseFloat(e.target.value)
  field.onChange(newValue >= 0.5 && newValue <= 10000 ? newValue : field.value)
}

export default InitialInputs
