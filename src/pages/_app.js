import "@/styles/globals.css";
import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ['latin'], weight: ["400", '300', '500'] });



export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <>
      <main className={poppins.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
