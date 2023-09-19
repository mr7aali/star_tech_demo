import dynamic from "next/dynamic";
const Card = dynamic(() => import("@/sheared/Card/ProductCard"));
import imgs from "@/assets/HomeImage/HomeImage";
const Product = () => {
  return (
    <div className='container mx-auto'>
      <h1 className=' text-center font-semibold text-2xl mb-10'>
        Product component
      </h1>
      <div className='flex flex-wrap justify-center gap-4'>
        <div className='flex flex-wrap justify-center gap-4'>
          {imgs.map((img, index) => (
            <div
              key={index}
              className='w-full sm:w-1/2 md:w-1/2 lg:w-[40%] xl:w-[24%] transform transition-transform ease-out hover:scale-105'>
              <Card img={img} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
