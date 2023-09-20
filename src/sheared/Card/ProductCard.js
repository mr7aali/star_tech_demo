import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";

const AiFillStar = dynamic(() =>
  import("react-icons/ai").then((module) => module.AiFillStar)
);

const BsFillCartCheckFill = dynamic(() =>
  import("react-icons/bs").then((module) => module.BsFillCartCheckFill)
);

const Button = dynamic(() => import("../Button/Button"));
const View = dynamic(() => import("../Button/View"));

const Product = ({ post }) => {
  return (
    <div className='w-full bg-white border border-gray-200 rounded-lg shadow '>
      <div className=''>
        <Image
          src={post.images[0].url}
          alt='product image'
          width={600}
          height={400}
          as='card image'
          priority={true}
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
          <h1 className='text-xl font-semibold tracking-tight text-gray-800 px-3'>
            {post.title}
          </h1>
        </a>
        <div className='flex items-center mt-2.5 mb-5 text-xl space-x-3'>
          {Array.from({ length: post.rating }, (_, index) => (
            <AiFillStar key={index} className='text-[#ffc934]' />
          ))}
          <h2>{post.rating}</h2>
        </div>
        <div className='flex items-center justify-between'>
          <span className='text-3xl font-bold'>$ {post.price}</span>
          <Button button='Add to Cart' icon={<BsFillCartCheckFill />} />
        </div>
        <div className="text-center my-3">
          <Link href={`/Products/${post.id}`} aria-label='view product details'>
            <View button='View All' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
