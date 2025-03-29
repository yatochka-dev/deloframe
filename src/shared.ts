import {z} from "zod";

const storiesEnum = z.enum(['1', '2']).transform((value) => {
    return parseInt(value) as 1 | 2
})
export {storiesEnum}