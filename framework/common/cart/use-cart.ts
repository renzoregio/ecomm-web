import { ApiHooks } from "@common/types/hooks"
import { useHook, useSWRHook } from "@common/utils/use-hook"
import { useApiProvider } from "@common"
import Cookies from "js-cookie"



const useCart = () => {
    const hook = useHook((hooks: ApiHooks) => hooks.cart.useCart)
    const { checkoutCookie } = useApiProvider()
    const fetcherWrapper: typeof hook.fetcher = (context) => {
        context.input.checkoutId = Cookies.get(checkoutCookie)
        return hook.fetcher(context)
    }

    return useSWRHook({...hook,  fetcherWrapper})
}


export default useCart;