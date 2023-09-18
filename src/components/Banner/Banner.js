import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const Banner = () => {
  return (
    <div
      style={{
        padding: "40px 0px",
      }}>
      <div className='Sub-banner-container md:gap-4 max-w-screen-xl mx-auto md:grid md:grid-cols-12 '>
        <div className='box m-3 md:m-0 hidden md:flex col-span-4 h-[400px] shadow-md'>
          <div className='sub-banner-img-container'>
            <Image
              className='h-[100%]'
              src='https://i.ibb.co/MPkYtpF/delivery.jpg'
              alt=''
              srcSet=''
              height={300}
              width={300}
            />
          </div>
        </div>

        <div className='box m-3 md:m-0  md:col-span-8 h-[400px] shadow-md'>
          <>
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
              <SwiperSlide>
                <div className='sub-banner-img-container'>
                  <Image
                    width={500}
                    height={500}
                    src='https://i.ibb.co/tPxWvCw/realmi.jpg'
                    alt=''
                    srcSet=''
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='sub-banner-img-container'>
                  <Image
                    width={500}
                    height={500}
                    src='https://i.ibb.co/PW2HtSN/oppo-f19-pro.png'
                    alt=''
                    srcSet=''
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='sub-banner-img-container'>
                  <Image
                    width={500}
                    height={500}
                    src='https://i.ibb.co/fxjRy0y/vivo-x80.png'
                    alt=''
                    srcSet=''
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='sub-banner-img-container'>
                  <Image
                    width={500}
                    height={500}
                    src='https://i.ibb.co/QCFx4xr/xiaomi-redmi-note-11-pro.png'
                    alt=''
                    srcSet=''
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </>
        </div>

        <div className='box m-3 md:m-0 md:col-span-6 h-[170px] shadow-md '>
          <div className='sub-banner-img-container'>
            <Image
              width={500}
              height={500}
              src='https://i.ibb.co/Mn2xFcf/mobilepoint-gadget.jpg'
              alt=''
              srcSet=''
            />
          </div>
        </div>
        <div className='box m-3 md:m-0  md:col-span-6 h-[170px] shadow-md'>
          <div className='sub-banner-img-container'>
            <Image
              width={500}
              height={500}
              src='https://i.ibb.co/KFb0dhJ/gadget-2.jpg'
              alt=''
              srcSet=''
            />
          </div>
        </div>
        <div className='box m-3 md:m-0 flex md:hidden col-span-4 h-[300px] shadow-md'>
          <div className='sub-banner-img-container'>
            <Image
              width={500}
              height={500}
              className='h-[100%]'
              src='https://i.ibb.co/MPkYtpF/delivery.jpg'
              alt=''
              srcSet=''
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
