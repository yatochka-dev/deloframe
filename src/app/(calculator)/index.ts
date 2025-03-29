"use server";
import { createSafeActionClient } from "next-safe-action";
import { z } from "zod";
import {storiesEnum} from "@/shared";
import {actionClient} from "@/lib/safe-action";
import {evaluate} from "mathjs";



const schema = z.object({
    width: z.number(),
    length: z.number(),
    stories: storiesEnum,
    params: z.object({
        id: z.number(),
        amount: z.number().optional(),
    })
})

export const calculate = actionClient
    .schema(schema)
    .outputSchema(z.number())
    .action(async ({parsedInput}) => {
       const vars = {
           width: parsedInput.width,
           length: parsedInput.length,
           stories: parsedInput.stories,

       }
        return evaluate(
            "(width/2+1)*(length/2+1)*stories",
            vars
        );
    })
