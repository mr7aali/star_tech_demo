import dynamic from "next/dynamic";
import Link from "next/link";
const Card = dynamic(() => import("@/sheared/Card/ProductCard"));
const View = dynamic(() => import("@/sheared/Button/View"));
const Product = ({ posts }) => {
  const data = posts.data;
  return (
    <div className='container mx-auto'>
      <h1 className=' text-center font-semibold text-2xl mb-10'>
        Product component
      </h1>
      <div className='flex justify-center gap-4'>
        <div className='flex flex-wrap justify-center gap-4'>
          {data.map((post, index) => (
            <div
              key={index}
              className='w-full sm:w-1/2 md:w-1/2 lg:w-[40%] xl:w-[24%] transform transition-transform ease-out hover:scale-105'>
              <Card post={post} />
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-9">
        <Link href={"/Products"}>
          <View button='View All'></View>
        </Link>
      </div>
    </div>
  );
};

export default Product;