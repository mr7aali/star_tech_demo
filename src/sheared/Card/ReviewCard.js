import Image from "next/image";

const ReviewCard = () => {
  return (
    <div className='grid mb-8 border border-gray-200 rounded-lg shadow-sm md:mb-12 md:grid-cols-1'>
      <figure className='flex flex-col items-center justify-center p-8 text-center border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r bg-[#081621] '>
        <blockquote className='max-w-2xl mx-auto mb-4 text-whitelg:mb-8 text-gray-300'>
          <h3 className='text-lg font-semibold text-gray-400'>
            Very easy this was to integrate
          </h3>
          <p className='my-4'>
            If you care for your time, I hands down would go with this.
          </p>
        </blockquote>
        <figcaption className='flex items-center justify-center space-x-3'>
          <Image
            className='rounded-full w-9 h-9'
            src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png'
            alt='profile picture'
            width={10}
            height={10}
            style={{ objectFit: "cover", borderRadius: "50%" }}
          />
          <div className='space-y-0.5 font-medium  text-left text-white'>
            <div>Bonnie Green</div>
            <div className='text-sm text-white'>Developer at Open AI</div>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default ReviewCard;
