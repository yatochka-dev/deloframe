import React from 'react'
import InitialInputs from '@/components/sections/calculator/initial'
import Parameters from "@/components/sections/calculator/Parameters";
import useCalcStore from '@/stores/calc'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { getPayload } from 'payload';
import config from '@payload-config'
import { houseComponentsValues, houseOptionsValues, ParameterCat, ParameterData } from "@/collections/Parameter";

interface CalculatorMainProps {}

const fetchParameters = async () => {
    const payload = await getPayload({ config });
    const params = await payload.find({
        collection: 'parameters',
        limit: 10000,
    });

    const mainParams = params.docs.filter(p => !p.isUtil);
    const optionalParams = params.docs.filter(p => p.isUtil);

    const groupByCategory = (items: ParameterData[]) =>
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
        items.reduce((acc: Record<ParameterCat, ParameterData[]>, param) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            if (!acc[param.category]) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                acc[param.category] = [];
            }
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            acc[param.category].push(param);
            return acc;
        }, {});

    return {
        parsedParamsMain: groupByCategory(mainParams) as unknown as Record<ParameterCat, ParameterData[]>,
        parsedParamsOptional: groupByCategory(optionalParams) as unknown as Record<ParameterCat, ParameterData[]>,
    };
};

const CalculatorMain = async ({}: CalculatorMainProps) => {
    const { parsedParamsMain, parsedParamsOptional } = await fetchParameters();
    const keys = [...houseOptionsValues, ...houseComponentsValues] as ParameterCat[];

    return (
        <section id='calc' className='min-h-screen h-full w-full flex justify-center px-20 container mx-auto py-32'>
            <div className='bg-card w-full p-4 flex rounded-md shadow-lg'>
                <div className='w-1/2'>
                    <InitialInputs />
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="default" className="cursor-pointer">
                                Изменить конфигурацию
                            </Button>
                        </DialogTrigger>
                        <DialogContent className='min-w-[75%] overflow-scroll'>
                            <DialogTitle>Конфигуратор</DialogTitle>
                            <Parameters mainParams={parsedParamsMain} optionalParams={parsedParamsOptional} keys={keys} />
                        </DialogContent>
                    </Dialog>
                </div>
                <div className='w-1/2'>
                    {/*<Building stories={calc.stories }/>*/}
                </div>
            </div>
        </section>
    );
}

export default CalculatorMain
