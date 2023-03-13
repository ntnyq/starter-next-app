import { NextSeo } from 'next-seo'
import GithubCorner from 'react-github-corner'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import clsx from 'clsx'

export default function Index() {
  const router = useRouter()
  const { register, handleSubmit, setValue, setError, formState } = useForm({
    defaultValues: {
      name: '',
    },
  })
  const onSubmit = handleSubmit(async values => {
    if (!values.name) {
      return setError('name', { message: 'Name is required' }, { shouldFocus: true })
    }
    router.push({ pathname: '/user/' + values.name })
  })

  useEffect(() => {
    const query = new URLSearchParams(window.location.search)
    const name = query.get('name')
    if (name) {
      setValue('name', name)
      onSubmit()
    }
  }, [])

  return (
    <>
      <NextSeo
        title='starter-next-app'
        description='starter-next-app'
        openGraph={{
          images: [{ url: `` }],
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
        <form
          onSubmit={onSubmit}
          className='my-8'
        >
          <div className='flex space-x-2'>
            <input
              className={clsx(
                'form-input w-full rounded-xl',
                formState.dirtyFields.name && 'border-red',
              )}
              placeholder='Input your name...'
              type='text'
              {...register('name')}
            />
            <button
              className='shrink-0 px-5 h-12 rounded-xl bg-gradient-to-br from-gray-600 to-gray-700 text-white focus:ring-2 ring-indigo-400 ring-offset-2 inline-flex items-center disabled:opacity-50'
              type='submit'
              role='button'
              disabled={formState.isSubmitting}
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
