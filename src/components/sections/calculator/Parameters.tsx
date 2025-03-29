"use client";
import {ParameterCat, ParameterData} from '@/collections/Parameter';
import React from 'react';
import {Checkbox} from "@/components/ui/checkbox";
import { Input } from '@/components/ui/input';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui/accordion';
import {Button} from "@/components/ui/button";
import useCalcStore from "@/stores/calc";

interface ParametersProps {
    params: Record<ParameterCat, ParameterData[]>
}

const Parameters = (
    {
        params
    }: ParametersProps
) => {
    const keys = Object.keys(params) as ParameterCat[];
const configMode = useCalcStore();
    return (
        <div>
            <div>
                <Button onClick={configMode.switchConfig}>
                    {configMode.customConfig ? "Выключить кастомный ввод" : "Включить кастомный ввод"}
                </Button>

            </div>

            <Accordion type={"multiple"}>

                {/*</AccordionItem>*/}
              <div>
                <h2>Required categories</h2>
                {keys.map(key => (
                    <AccordionItem value={key} key={`${key}-accordion-item-config`}>
                      <AccordionTrigger>{key}</AccordionTrigger>
                      <AccordionContent className={"space-y-3"}>
                        {params[key].map((param) => (
                          <div className="items-top flex flex-row space-x-2" key={`${key}-${param.name}-${param.cat}-config`}>
                            <div className="flex flex-row items-center gap-3 leading-none">
                              <Checkbox className={"cursor-pointer"}/>
                              <label
                                htmlFor="terms1"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {param.name}
                              </label>
                              <Input type={"number"} disabled defaultValue={"30"} className={"w-24"}/>
                            </div>
                          </div>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  )
                )}

              </div>
              <div>
                <h2>Optional categories</h2>

              </div>

            </Accordion>

        </div>
    );
};

export default Parameters;