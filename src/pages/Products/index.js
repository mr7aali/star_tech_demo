import { loadAllProduct } from "@/utils/Home/LoadAllProducts";
import dynamic from "next/dynamic";
import Head from "next/head";
const RootLayouts = dynamic(() => import("@/components/Layouts/RootLayouts"));
const Card = dynamic(() => import("@/sheared/Card/ProductCard"));

const Product = ({data}) => {
  const posts = data.data
  return (
    <div>
      <Head>
        <title>All Products</title>
      </Head>
      <div>
        <h1 className='text-center text-2xl p-5'>This is my product Page</h1>
        <div className='flex flex-wrap justify-center gap-4'>
          {posts.map((post, index) => (
            <div
              key={index}
              className='w-full sm:w-1/2 md:w-1/2 lg:w-[40%] xl:w-[24%] transform transition-transform ease-out hover:scale-105'>
              <Card post={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;

Product.getLayout = function getLayout(page) {
  return <RootLayouts>{page}</RootLayouts>;
};

export async function getServerSideProps() {
  const data = await loadAllProduct();
  return { props: { data } };
}