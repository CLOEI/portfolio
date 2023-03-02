import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Raleway, Assistant, Open_Sans } from "@next/font/google"

const raleway = Raleway({
  subsets: ["latin"]
})

const assistant = Assistant({
  subsets: ["latin"]
})

const open_sans = Open_Sans({
  subsets: ["latin"]
})

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
