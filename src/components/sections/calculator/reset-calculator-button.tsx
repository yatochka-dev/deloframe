'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import useCalcStore from '@/stores/calc'
import { CategoryParameters } from '@/lib/fetchParameters'
import { Category } from '@/payload-types'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

interface ResetCalculatorButtonProps {
  mainParams: CategoryParameters
  mainCategories: Category[]
}

const ResetCalculatorButton = ({ mainCategories, mainParams }: ResetCalculatorButtonProps) => {
  const resetStore = useCalcStore((s) => s.resetInitialValues)

  const handleReset = () => {
    resetStore(mainParams, mainCategories)
  }
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full cursor-pointer" variant="outline">
            Reset Calculator
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>Reset Calculator</DialogTitle>
          <DialogDescription>Are you sure you want to reset the calculator?</DialogDescription>
          <DialogFooter>
            <DialogClose className={'w-full cursor-pointer'}>
              <Button variant="outline" className={'w-full cursor-pointer'} onClick={handleReset}>
                Reset
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default ResetCalculatorButton
