import '../css/tailwind.css'
import { AppProps } from 'next/app'
import { AnalyticsWrapper } from 'src/components/Analytics'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Component {...pageProps} />
    {process.env.NODE_ENV === 'production' && <AnalyticsWrapper />}
  </>
)

export default App
