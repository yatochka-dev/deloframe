import React from 'react'
import InitialInputs from '@/components/sections/calculator/initial'
import Parameters from '@/components/sections/calculator/parameters'
import { fetchParameters } from '@/lib/fetchParameters'
import { LocaleCode } from '@payload-config'
import Building from '@/components/sections/calculator/building'
import ParametersDrawer from '@/components/sections/calculator/parameters-drawer'
import ResetCalculatorButton from '@/components/sections/calculator/reset-calculator-button'
import Output from '@/components/sections/calculator/output'
export default async function CalculatorMain({ locale }: { locale: LocaleCode }) {
  const data = await fetchParameters(locale)

  return (
    <section className="min-h-screen h-full w-full flex justify-center px-5 mx-auto py-16">
      <div className="bg-card w-full p-4 flex rounded-md shadow-lg flex flex-col 2xl:flex-row">
        <div className="w-full 2xl:max-w-1/3">
          <InitialInputs />
          <ParametersDrawer>
            <Parameters {...data} />
          </ParametersDrawer>
          <ResetCalculatorButton
            mainParams={data.parsedParamsMain}
            mainCategories={data.mandatoryCategories}
          />
          <Output />
        </div>
        <div className="w-full 2xl:max-w-2/3 flex justify-center md:px-8">
          <Building />
        </div>
      </div>
    </section>
  )
}
