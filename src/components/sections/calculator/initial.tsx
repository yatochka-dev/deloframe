'use client'
import React, { useEffect } from 'react'
import useCalcStore from '@/stores/calc'
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
import { permissibleStoriesValues, storiesEnum } from '@/shared'
import { Calculator } from '@/payload-types'
import { decode } from '@/shared'

const schema = z.object({
  stories: storiesEnum,
  width: z.number().min(0.5).max(10000),
  length: z.number().min(0.5).max(10000),
})

type InitialInputValues = {
  stories: z.infer<typeof storiesEnum>
  width: number
  length: number
}

const InitialInputs = ({ settings }: { settings: Calculator }) => {
  const initialInput = useCalcStore((s) => s.initialInput)
  const updateInitialInput = useCalcStore((s) => s.updateInitialInput)
  const form = useForm<InitialInputValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      stories: initialInput.stories,
      width: initialInput.width,
      length: initialInput.length,
    },
  })

  // Update store when form changes
  form.watch((value) => {
    updateInitialInput({
      stories: value.stories,
      width: value.width,
      length: value.length,
    })
  })

  useEffect(() => {
    const subscription = useCalcStore.subscribe((state) => {
      const { stories, width, length } = state.initialInput
      // Compare current form values with store values
      if (
        form.getValues('stories') !== stories ||
        form.getValues('width') !== width ||
        form.getValues('length') !== length
      ) {
        form.reset({
          stories,
          width,
          length,
        })
      }
    })
    return () => subscription()
  }, [form])

  return (
    <Form {...form}>
      <form className={'flex flex-col gap-4'}>
        <StoriesField control={form.control} settings={settings} />
        <NumberField name="width" label={settings.main.inputs.width} control={form.control} />
        <NumberField name="length" label={settings.main.inputs.length} control={form.control} />
      </form>
    </Form>
  )
}

const StoriesField = ({
  control,
  settings,
}: {
  control: Control<InitialInputValues>
  settings: Calculator
}) => {
  return (
    <FormField
      render={({ field }) => (
        <FormItem>
          <FormLabel>{settings.main.inputs.stories.label}</FormLabel>
          <FormControl>
            <Select onValueChange={field.onChange} defaultValue={field.value.toString()}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Stories" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {permissibleStoriesValues.map((value) => {
                    return (
                      <SelectItem
                        value={value.toString()}
                        key={`${value}-stories`}
                        className={'dir-rtl'}
                      >
                        {settings.main.inputs.stories[decode[value]]}
                      </SelectItem>
                    )
                  })}
                </SelectGroup>
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
      name={'stories'}
      control={control}
    />
  )
}

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
