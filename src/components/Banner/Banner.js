import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

export default function Banner() {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'>
        <SwiperSlide>
          <Image
            src='/public/one.jpg'
            alt='One'
            width={1170}
            height={300}></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src='/public/two.jpg'
            alt='Two'
            width={1170}
            height={300}></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src='/public/three.jpg'
            alt='Three'
            width={1170}
            height={300}></Image>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
