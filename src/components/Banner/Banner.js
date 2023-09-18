import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import dynamic from "next/dynamic";
const BannerAds = dynamic(() => import("./BannerAds"));

const Banner = () => {
  const imgUrls = [
    "https://i.ibb.co/tPxWvCw/realmi.jpg",
    "https://i.ibb.co/PW2HtSN/oppo-f19-pro.png",
    "https://i.ibb.co/fxjRy0y/vivo-x80.png",
    "https://i.ibb.co/QCFx4xr/xiaomi-redmi-note-11-pro.png",
  ];

  return (
    <div style={{ padding: "40px 0px" }}>
      <div className='Sub-banner-container md:gap-4 max-w-screen-xl mx-auto md:grid md:grid-cols-12 '>
        <div className='box m-3 md:m-0 hidden md:flex col-span-4 h-[400px] shadow-md'>
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

        <div className='box m-3 md:m-0  md:col-span-8 h-[400px] shadow-md'>
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
                  <Image width={500} height={500} src={imageUrl} alt='' as='image' priority={true} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <BannerAds></BannerAds>
      </div>
    </div>
  );
};

export default Banner;
