import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";
const AiFillStar = dynamic(() =>
  import("react-icons/ai").then((module) => module.AiFillStar)
);

const Product = ({ img }) => {
  return (
    <div className='p-5 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow '>
      <div className='w-1/3 h-96'>
        <Image
          src={img}
          alt='product image'
          width={500}
          height={400}
          style={{
            objectFit: "cover", // or "contain" depending on your layout needs
            objectPosition: "center center", // adjust as needed
          }}
          sizes='100vw'
          className='p-8 rounded-t-lg'
        />
      </div>
      <div className='px-5 pb-5'>
        <a href='#'>
          <h5 className='text-xl font-semibold tracking-tight text-white'>
            Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
          </h5>
        </a>
        <div className='flex items-center mt-2.5 mb-5 text-2xl'>
          <AiFillStar className='text-[#ffc934]'></AiFillStar>
          <AiFillStar></AiFillStar>
          <AiFillStar></AiFillStar>
          <AiFillStar></AiFillStar>
          <AiFillStar></AiFillStar>
          <span className='bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3'>
            5.0
          </span>
        </div>
        <div className='flex items-center justify-between'>
          <span className='text-3xl font-bold text-gray-900 dark:text-white'>
            $599
          </span>
          <a
            href='#'
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default Product;
