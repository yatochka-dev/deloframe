'use client';
import useCalcStore from "@/stores/calc";
import {Button} from "@/components/ui/button";
import {Calculator, SquareFunction} from "lucide-react";
import React from "react";

export function SwitchCalculationModeButton() {
    const on = useCalcStore(s => s.customConfig);
    const toggle = useCalcStore(s => s.switchConfig);
    return <div className="flex justify-center items-center gap-2">
        <Button
            variant="default"
            className={"cursor-pointer "}
            onClick={toggle}
        >
            {on ? (
                <div className={"flex items-center gap-2"}>
                    <Calculator/> Каст. ввод
                </div>
            ) : (
                <div className={"flex items-center gap-2"}>
                    <SquareFunction/> Авто. ввод
                </div>
            )}
        </Button>
        <p className="text-gray-500 text-sm">
            Click the button to toggle between different configuration modes for your calculations.
        </p>
    </div>;
}