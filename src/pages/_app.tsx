import '../styles/tailwind.css'
import type { AppProps } from 'next/app'
import { AnalyticsWrapper } from 'src/components/Analytics'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      {process.env.NODE_ENV === 'production' && <AnalyticsWrapper />}
    </>
  )
}
