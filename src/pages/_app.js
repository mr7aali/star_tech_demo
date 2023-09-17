import '@/styles/globals.css'

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }


export default function MyApp({ Component, pageProps }) {

  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(<Component {...pageProps} />)
}