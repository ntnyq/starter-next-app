import '../css/tailwind.css'
import { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Component {...pageProps} />
    {process.env.NODE_ENV === `production` && <Analytics />}
  </>
)

export default App
