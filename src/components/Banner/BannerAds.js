import Image from 'next/image';
const BannerAds = () => {
    return (
      <>
        <div className='box m-3 md:m-0 md:col-span-6 h-[180px] shadow-md '>
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
        <div className='box m-3 md:m-0  md:col-span-6 h-[180px] shadow-md'>
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
      </>
    );
};

export default BannerAds;