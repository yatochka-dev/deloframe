'use client'
import {houseComponents, houseOptions, ParameterCat, ParameterData} from '@/collections/Parameter'
import React from 'react'
import {Button} from '@/components/ui/button'
import {Dialog, DialogContent, DialogTitle, DialogTrigger} from '@/components/ui/dialog'
import {SwitchCalculationModeButton} from "@/components/sections/calculator/switch-calculation-mode-button";
import ParametersCategory from "@/components/sections/calculator/parameters-category";

interface ParametersProps {
  mainParams: Record<ParameterCat, ParameterData[]>
  optionalParams: Record<ParameterCat, ParameterData[]>
  keys: ParameterCat[]
}

const Parameters = ({
    mainParams,
    optionalParams,
                    }: ParametersProps) => {
  const mainCategories = houseComponents
  const optionalCategories = houseOptions


  return (
    <div className="flex flex-col gap-4">
        <SwitchCalculationModeButton />

        <div className={'space-y-3'}>
            <h2 className={'text-xl font-bold'}>Required categories</h2>
            <div className={'grid gap-4 grid-cols-3'}>
                {mainCategories.map((category) => (
                    <Dialog key={`${category.value}-dialog-${category.label}`}>
                        <DialogTrigger asChild>
                            <Button variant="outline" className="cursor-pointer">
                                {category.label}
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogTitle>{category.label}</DialogTitle>
                            <ParametersCategory params={mainParams[category.value as ParameterCat]} />
                        </DialogContent>
                    </Dialog>
                ))}
            </div>
        </div>
        <div className={'space-y-3'}>
            <h2 className={'text-xl font-bold'}>Optional categories</h2>
            <div className={'grid gap-4 grid-cols-3'}>
                {optionalCategories.map((category) => (
                    <Dialog key={`${category.value}-dialog-${category.label}`}>
                        <DialogTrigger asChild>
                            <Button variant="outline" className="cursor-pointer">
                                {category.label}
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogTitle>{category.label}</DialogTitle>
                            <ParametersCategory params={optionalParams[category.value as ParameterCat]} />
                        </DialogContent>
                    </Dialog>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Parameters
