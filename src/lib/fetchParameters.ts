import {getPayload} from "payload";
import config from "@payload-config";
import {ParameterCat, ParameterData} from "@/collections/Parameter";

export const fetchParameters = async () => {
    const payload = await getPayload({config})
    const params = await payload.find({
        collection: 'parameters',
        limit: 10000,
    })

    const mainParams = params.docs.filter((p) => !p.isUtil)
    const optionalParams = params.docs.filter((p) => p.isUtil)

    const groupByCategory = (items: ParameterData[]) =>
        items.reduce((acc: Record<ParameterCat, ParameterData[]>, param) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            if (!acc[param.category]) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                acc[param.category] = []
            }
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            acc[param.category].push(param)
            return acc
        }, {})

    return {
        parsedParamsMain: groupByCategory(mainParams) as unknown as Record<
            ParameterCat,
            ParameterData[]
        >,
        parsedParamsOptional: groupByCategory(optionalParams) as unknown as Record<
            ParameterCat,
            ParameterData[]
        >,
    }
}