import { useAddItem } from "@common/cart";
import { MutationHook } from "@common/types/hooks";

export default useAddItem;



export const handler: MutationHook = {
    fetcherOptions: {
        query: `query { hello }`,
    },
    fetcher: async ({ fetch, options: {query}}) => {
        const response = await fetch({
            query
        })
        return response
    },
    useHook: ({fetch} : any) => {
        return async (input: any) => {
            const response = await fetch(input)
            
            return {
                output: response
            }
        }
    }
}