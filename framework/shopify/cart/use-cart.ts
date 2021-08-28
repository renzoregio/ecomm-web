import useCart from "@common/cart/use-cart";
import { createCheckout, getCheckoutQuery } from "@framework/utils";
import { useMemo } from "react";
import { checkoutToCart } from "@framework/utils";

export default useCart;

export const handler = {

    fetchOptions: {
        query: getCheckoutQuery
    },

    async fetcher({fetch, options, input: {checkoutId}}) {

        let checkout;
        
        if(checkoutId){
            const { data } = await fetch({...options, variables: { checkoutId }})
            checkout = data.node
            
        } else { 
            checkout = await createCheckout(fetch as any)
        }

        const cart = checkoutToCart(checkout)
        console.log(cart)
        return cart
    },
    
    useHook: ({useData} : any) => {
        const data = useData({
             swrOptions: {
                 revalidateOnFocus: false
             }
        })

        return useMemo(() => {
            return data
        }, [data])
        
    }
}

