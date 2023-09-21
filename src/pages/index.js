import dynamic from "next/dynamic";
const RootLayouts = dynamic(() => import("@/components/Layouts/RootLayouts"));
const Banner = dynamic(() => import("@/components/Banner/Banner"));
const Product = dynamic(() => import("@/components/HomeProduct/Product"));
const Review = dynamic(() => import("@/components/HomeReviews/Review"));
import { loadProduct } from "@/utils/Home/LoadProduct";
const HeadTag = dynamic(() => import("@/sheared/HeadTag/HeadTag"));



const HomePage = ({ posts }) => {
  return (
    <div>
      <HeadTag title={'Home'} descriptionContent={"Tech products home page"} />
      <div>
        <div>
          <Banner />
        </div>
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