import React from 'react'
import InitialInputs from '@/components/sections/calculator/initial'
import useCalcStore from '@/stores/calc'
import {Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {PlusIcon} from "lucide-react";
import Parameters from "@/components/sections/calculator/Parameters";
import { getPayload } from 'payload';
import config from '@payload-config'
import {ParameterCat, ParameterData} from "@/collections/Parameter";

interface CalculatorMainProps {}

const CalculatorMain = async ({}: CalculatorMainProps) => {
    const payload = await getPayload({ config })

    const params = await payload.find({
        collection: 'parameters',
        limit: 10000,

    })

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const parsedParams: Record<ParameterCat, ParameterData[]> = params.docs.reduce((acc, param) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        if (!acc[param.cat]) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            acc[param.cat] = [];
        }
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        acc[param.cat].push(param);
        return acc;
    }, {});

  return (
    <section
      id={'calc'}
      className={'min-h-screen h-full w-full flex justify-center px-20 container mx-auto py-32'}
    >
      <div className={'bg-card w-full p-4 flex rounded-md shadow-lg'}>

            <div className={'w-1/2'}>
              <InitialInputs />
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="default" className={"cursor-pointer"}>
                            Изменить конфигурацию
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogTitle>Конфигуратор</DialogTitle>
                        <Parameters params={parsedParams} />
                    </DialogContent>
                </Dialog>
            </div>
            <div className={'w-1/2'}>
                {/*<Building stories={calc.stories }/>*/}
            </div>

      </div>
    </section>
  )
}

export default CalculatorMain
