import dynamic from "next/dynamic";
import Head from "next/head";
const RootLayouts = dynamic(() => import("@/components/Layouts/RootLayouts"));
const Banner = dynamic(() => import("@/components/Banner/Banner"));
const Product = dynamic(() => import("@/components/HomeProduct/Product"));
const Review = dynamic(() => import("@/components/HomeReviews/Review"));
import { loadProduct } from "@/utils/Home/LoadProduct";

const HomePage = ({ posts }) => {
  console.log(posts);
  return (
    <div>
      <Head>
        <meta charSet='UTF-8' />
        <meta name='keywords' content='titla, meta, nextjs' />
        <meta name='author' content='Syamlal CM' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='description' content='Tech products home page'></meta>
        <title>Home</title>
      </Head>
      <div>
        <Banner />
        <div className='mb-12'>
          <Product posts={posts}></Product>
        </div>
        <div className='mb-12'>
          <Review />
        </div>
        <h1 className='text-center text-2xl p-5'>This is my home Page</h1>
      </div>
    </div>
  );
};

export default HomePage;



HomePage.getLayout = function getLayout(page) {
  return (
    <RootLayouts>
      {page}
    </RootLayouts>
  )
};


export async function getStaticProps() {
  const posts = await loadProduct();
  return { props: { posts }, revalidate: 10 };
}