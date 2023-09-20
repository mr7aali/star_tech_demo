import dynamic from "next/dynamic";
import Head from "next/head";
import { loadProductDetails } from "@/utils/Product/ProductDetails";
import React from "react";
import Link from "next/link";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";

const RootLayouts = dynamic(() => import("@/components/Layouts/RootLayouts"));
const AiFillStar = dynamic(() =>
  import("react-icons/ai").then((module) => module.AiFillStar)
);
const BsFillCartCheckFill = dynamic(() =>
  import("react-icons/bs").then((module) => module.BsFillCartCheckFill)
);
const View = dynamic(() => import("@/sheared/Button/View"));

const Details = ({ data }) => {
  const post = data.data;
  // const img = post.images;
  return (
    <div>
      <Head>
        <meta charSet='UTF-8' />
        <meta name='keywords' content='titla, meta, nextjs' />
        <meta name='author' content='Syamlal CM' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='description' content='Tech products details page'></meta>
        <title>Home</title>
      </Head>
      <div className='container mx-auto'>
        <section className='text-gray-700 body-font overflow-hidden bg-white'>
          <div className='container px-5 py-20 mx-auto'>
            <div className='lg:w-4/5 mx-auto flex flex-wrap'>
              {/* <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2550,
                  disableOnInteraction: true,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className='mySwiper'>
                {img.map((imageUrl, index) => (
                  <SwiperSlide key={index}>
                    <div className='sub-banner-img-container'>
                      <Image
                        width={600}
                        height={300}
                        src={imageUrl}
                        alt='Banner'
                        as='image'
                        priority={true}
                        sizes='100vw'
                        style={{
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper> */}
              <div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
                <h2 className='title-font text-gray-500 tracking-widest'>
                  {post.category}
                </h2>
                <h1 className='text-gray-900 text-3xl title-font font-medium mb-1'>
                  {post.title}
                </h1>
                <div className='flex mb-4'>
                  <div className='flex items-center mt-2.5 space-x-3'>
                    {Array.from({ length: post.rating }, (_, index) => (
                      <AiFillStar key={index} className='text-[#ffc934]' />
                    ))}
                    <h2>{post.rating}</h2>
                  </div>
                  <span className='flex ml-3 pl-3 py-2 border-l-2 border-gray-200'>
                    <a className='text-gray-500'>
                      <svg
                        fill='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        className='w-5 h-5'
                        viewBox='0 0 24 24'>
                        <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
                      </svg>
                    </a>
                    <a className='ml-2 text-gray-500'>
                      <svg
                        fill='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        className='w-5 h-5'
                        viewBox='0 0 24 24'>
                        <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
                      </svg>
                    </a>
                    <a className='ml-2 text-gray-500'>
                      <svg
                        fill='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        className='w-5 h-5'
                        viewBox='0 0 24 24'>
                        <path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'></path>
                      </svg>
                    </a>
                  </span>
                </div>
                <p className='leading-relaxed'>{post.description}</p>
                <div className='flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5'>
                  <div className='flex'>
                    <span className='mr-3'>Color</span>
                    <button className='border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none'></button>
                    <button className='border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none'></button>
                    <button className='border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none'></button>
                  </div>
                </div>
                <div className='flex'>
                  <span className='title-font font-medium text-2xl text-gray-900'>
                    ${post.price}
                  </span>
                  <button className='flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded'>
                    <BsFillCartCheckFill />
                  </button>
                  <button className='rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4'>
                    <svg
                      fill='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      className='w-5 h-5'
                      viewBox='0 0 24 24'>
                      <path d='M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z'></path>
                    </svg>
                  </button>
                </div>
                <Link href={"/Products"} aria-label='Button for product page'>
                  <View button='Back'></View>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Details;

Details.getLayout = function getLayout(page) {
  return <RootLayouts>{page}</RootLayouts>;
};
export async function getStaticPaths() {
  const paths = await loadProductDetails();
  return { paths, fallback: true };
}

export async function getStaticProps(context) {
  const { params } = context;
  console.log(params);
  const res = await fetch(
    `https://start-tech-server.vercel.app/api/v1/product/${params.productId}`
  );
  const data = await res.json();
  return { props: { data } };
}
