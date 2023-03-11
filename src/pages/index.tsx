import { NextSeo } from 'next-seo'
import GithubCorner from 'react-github-corner'

const Page = () => {
  return (
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
          <p className='text-zinc-500 text-sm mt-2'>hello next app</p>
        </header>
        <form className='my-8'>
          <div className='flex space-x-2'>
            <input
              className='form-input w-full rounded-xl'
              placeholder='Input your name...'
              type='text'
            />
            <button
              className='shrink-0 px-5 h-12 rounded-xl bg-gradient-to-br from-gray-600 to-gray-700 text-white focus:ring-2 ring-indigo-400 ring-offset-2 inline-flex items-center disabled:opacity-50'
              type='button'
              role='button'
            >
              Go
            </button>
          </div>
        </form>
        <main className='my-8'></main>
        <footer className='py-20 text-center text-zinc-500 text-sm'>
          <p className='py-1'>
            &copy;{' '}
            <a
              className='text-blue-600 hover:underline'
              href='https://github.com/ntnyq'
              rel='noopener noreferrer'
              target='_blank'
            >
              ntnyq
            </a>{' '}
            since 2023
          </p>
          <p className='py-1'>
            Design from{' '}
            <a
              className='text-zinc-400 hover:underline hover:text-zinc-600'
              href='https://twdown.app/?url=https%3A%2F%2Ftwitter.com%2Fhourandy06%2Fstatus%2F1604990544463417344'
              rel='noopener noreferrer'
              target='_blank'
            >
              Download Twitter Video
            </a>
          </p>
        </footer>
        <GithubCorner href='https://github.com/ntnyq/starter-next-app' />
      </div>
    </>
  )
}

export default Page
