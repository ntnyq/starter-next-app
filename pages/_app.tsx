import '../styles/app.css'
import type { AppProps } from 'next/app'
import { GoogleAnalytics } from 'nextjs-google-analytics'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics
        trackPageViews
        strategy='lazyOnload'
      />
      <Component {...pageProps} />
    </>
  )
}
