import dynamic from "next/dynamic";
const Card = dynamic(() => import("@/sheared/Card/ReviewCard"));
const Review = () => {
  return (
    <div className='container mx-auto'>
      <h1 className=" text-center font-semibold text-2xl mb-10'">
        Reviews Components
      </h1>
      <div className='flex flex-wrap lg:flex-nowrap justify-center gap-2 sm:w-full'>
        <Card className='w-full lg:w-1/3 transform transition-transform ease-out hover:scale-105'></Card>
        <Card className='w-full lg:w-1/3 transform transition-transform ease-out hover:scale-105'></Card>
        <Card className='w-full lg:w-1/3 transform transition-transform ease-out hover:scale-105'></Card>
      </div>
    </div>
  );
};

export default Review;
