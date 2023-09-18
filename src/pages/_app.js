import '@/styles/globals.css'

import dynamic from 'next/dynamic';

// const Poppins = dynamic(() => import('next/font/google').then((module) => module.Poppins))
// const Poppins = (await (import ('next/font/google'))).default


import { Poppins } from 'next/font/google';
const poppins = Poppins({ subsets: ['latin'] ,weight:['900']})

export default function MyApp({ Component, pageProps }) {

  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(
    <>
      <main className={poppins.className}>
        <Component {...pageProps} />
      </main>
    </>)
}