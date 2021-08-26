import { createContext,  ReactNode, useContext, useMemo } from "react";
import { ApiConfig, ApiProviderContex } from "./types/api";
import {ApiHooks} from "@common/types/hooks"

interface ApiProviderProps {
    children: ReactNode | ReactNode[]
    config: ApiConfig 
    hooks: ApiHooks
}

export const ApiContext = createContext<Partial<ApiProviderContex>>({})


export const ApiProvider = ({children, config, hooks} : ApiProviderProps) => {

    const coreConfig = useMemo(() => {
        return {
            fetcher: config.fetch,
            hooks,
            checkoutCookie: config.checkoutCookie
        }
    }, [config.fetch, hooks, config.checkoutCookie])
    return (
        <ApiContext.Provider value={coreConfig}>
            {children}
        </ApiContext.Provider>
    )
}

export const useApiProvider = () => {
    return useContext(ApiContext) as ApiProviderContex
}