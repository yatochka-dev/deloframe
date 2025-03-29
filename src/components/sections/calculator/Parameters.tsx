"use client";
import {
    houseComponents,
    houseOptions,
    ParameterCat,
    ParameterData
} from '@/collections/Parameter';
import React from 'react';
import {Button} from "@/components/ui/button";
import useCalcStore from "@/stores/calc";
import {Dialog, DialogContent, DialogTitle, DialogTrigger} from '@/components/ui/dialog';
import {Calculator, SquareFunction} from "lucide-react";
import {calculate} from "@/app/(calculator)";

interface ParametersProps {
    mainParams: Record<ParameterCat, ParameterData[]>,
    optionalParams: Record<ParameterCat, ParameterData[]>,
    keys: ParameterCat[],

}



const Parameters = (
    {
    }: ParametersProps
) => {
    const mainCategories = houseComponents;
    const optionalCategories = houseOptions;

    const configMode = useCalcStore();
    return (
        <div className='flex flex-col gap-4'>
                                    <div className="flex justify-center items-center gap-2">
                                                <Button
                                                            variant="default"
                                                            className={'cursor-pointer '}

                                                            onClick={() => configMode.switchConfig()}
                                                >
                                                    {configMode.customConfig
                                                        ? <div className={"flex items-center gap-2"}><Calculator/> Каст. ввод</div>
                                                        : <div className={"flex items-center gap-2"}><SquareFunction /> Авто. ввод</div>
                                                    }



                                                </Button>
                                                <p className="text-gray-500 text-sm">
                                                            Click the button to toggle between different configuration modes for your calculations.
                                                </p>
                                    </div>

            {/*</AccordionItem>*/}
            <div className={"space-y-3"}>
                <h2 className={"text-xl font-bold"}>Required categories</h2>
                <div className={"grid gap-4 grid-cols-3"}>
                    {mainCategories.map(category => (
                            <Dialog key={`${category.value}-dialog-${category.label}`}>
                                <DialogTrigger asChild>
                                    <Button variant="outline" className="cursor-pointer">
                                        {category.label}
                                    </Button>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogTitle>{category.label}</DialogTitle>
                                <Button onClick={async () => {
                                    const res = await calculate({
                                        width: 10,
                                        length: 8,
                                        stories: "1",
                                        params: {
                                            id: 1,
                                            amount: 10,
                                        }
                                    })
                                    console.log(res?.data);
                                }}>
Calculate
                                </Button>
                                </DialogContent>
                            </Dialog>
                        )
                    )}
                </div>

            </div>
            <div className={"space-y-3"}>
                <h2 className={"text-xl font-bold"}>Optional categories</h2>
                <div className={"grid gap-4 grid-cols-3"}>
                    {optionalCategories.map(category => (
                            <Dialog key={`${category.value}-dialog-${category.label}`}>
                                <DialogTrigger asChild>
                                    <Button variant="outline" className="cursor-pointer">
                                        {category.label}
                                    </Button>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogTitle>{category.label}</DialogTitle>

                                </DialogContent>
                            </Dialog>
                        )
                    )}
                </div>

            </div>


        </div>
    );
};

export default Parameters;