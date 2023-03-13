import type { GetStaticProps, GetStaticPaths } from 'next'

export interface Props {
  name: string
}

export default function User({ name }: Props) {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <h1 className='text-5xl'>hello {name}</h1>
    </div>
  )
}

export const getStaticProps: GetStaticProps<{}, { name: string }> = async context => {
  const name = context.params?.name
  return {
    props: {
      name,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}
