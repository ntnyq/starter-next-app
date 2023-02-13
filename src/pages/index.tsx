import { NextSeo } from 'next-seo'
import GithubCorner from 'react-github-corner'

const Page = () => (
  <>
    <NextSeo
      title='starter-next-app'
      description='starter-next-app'
      openGraph={{
        images: [
          {
            url: ``,
          },
        ],
      }}
      twitter={{
        cardType: 'summary_large_image',
      }}
    />
    <div className='max-w-xl m-auto p-5 py-20'>
      <header className='text-center'>
        <h1 className='text-5xl font-bold'>starter-next-app</h1>
      </header>
      <GithubCorner href='https://github.com/ntnyq/starter-next-app' />
    </div>
  </>
)

export default Page
