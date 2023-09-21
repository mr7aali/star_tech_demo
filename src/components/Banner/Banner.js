import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import dynamic from "next/dynamic";
const BannerAds = dynamic(() => import("./BannerAds"));
import imgUrls from "@/assets/BannerImage/BannerImage";



const Banner = () => {
  return (
    <div style={{ padding: "40px 0px" }}>
      <div className='md:gap-4 max-w-screen-2xl mx-auto md:grid md:grid-cols-12 '>
        <div className='box m-3 md:m-0 hidden md:flex col-span-4 h-[500px] shadow-md'>
          <div className='sub-banner-img-container'>
            <Image
              className='h-[100%]'
              src='https://i.ibb.co/MPkYtpF/delivery.jpg'
              alt=''
              height={300}
              width={300}
              as='image'
              priority={false}
            />
          </div>
        </div>

        <div className='box m-3 md:m-0  md:col-span-8 h-[500px] shadow-md'>
          <Swiper
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
            {imgUrls.map((imageUrl, index) => (
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
          </Swiper>
        </div>
        <BannerAds />
      </div>
    </div>
  );
};

export default Banner;