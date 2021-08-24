export type ApiFetcherOptions = {
  query: string;
  variables?: Variables;
};

export type Variables = {[key: string] : string | any |undefined}

export type ApiFetcherResults<T> = {
  data: T;
};

export interface ApiConfig {
  fetch<T>(options: ApiFetcherOptions): Promise<ApiFetcherResults<T>>
}


export interface ApiHooks {
  cart: {
    useAddItem: any
  }
}

export type ApiFetcher<T = any> = ( options : ApiFetcherOptions) => Promise<ApiFetcherResults<T>>


export interface ApiProviderContex {
  fetcher: ApiFetcher
  hooks: ApiHooks
}