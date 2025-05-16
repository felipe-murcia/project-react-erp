import { Provider } from "@/src/components/ui/provider"

function Base({ Component, pageProps }:any) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  )
}

export default Base;
