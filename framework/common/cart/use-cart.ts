import { ApiHooks, SWRHook } from "@common/types/hooks"
import { useHook, useSWRHook } from "@common/utils/use-hook"
import { useApiProvider } from "@common"
import Cookies from "js-cookie"

export type UseCart<H extends SWRHook = SWRHook<any>> = ReturnType<H["useHook"]>

const useCart: UseCart = () => {
    const hook = useHook((hooks: ApiHooks) => hooks.cart.useCart)
    const { checkoutCookie } = useApiProvider()
    const fetcher: typeof hook.fetcher = (context : any) => {
        context.input.checkoutId = Cookies.get(checkoutCookie)
        return hook.fetcher(context)
    }

    return useSWRHook({...hook, fetcher})()
}


export default useCart;