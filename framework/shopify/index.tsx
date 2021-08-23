import { ReactNode } from "react";
import { getConfig } from "./api/config";
import { ApiProvider as CoreApiProvider, useApiProvider as UseCoreApiProvider} from "@common";
import { shopifyHooks } from "./hooks"


interface ShopifyApiProviderProps {
    children: ReactNode | ReactNode[]
    shopifyHooks: {[key: string] : () => void}
}

const config = getConfig()


export const ApiProvider = ({children}: ShopifyApiProviderProps) => {
    return (
        <CoreApiProvider config={{...config}} hooks={shopifyHooks}>
            {children}
        </CoreApiProvider>
    )
}

export const useApiProvider = () => UseCoreApiProvider()
