import Link from "next/link";
import dynamic from "next/dynamic";
const View = dynamic(() => import("../Button/View"));

const Pagination = ({ currentPage, totalPages }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='flex flex-wrap items-center mt-4'>
      <div className='flex justify-center flex-wrap items-center leading-[4rem]'>
        {currentPage > 1 && (
          <Link href={`/Products?page=${currentPage - 1}`} className='mx-2'>
            <View button={"Previous"}></View>
          </Link>
        )}

        {Array.from({ length: totalPages }, (_, index) => (
          <Link
            key={index}
            href={`/Products?page=${index + 1}`}
            className={index + 1 === currentPage ? "font-bold mx-2" : "mx-2"}>
            <View button={index + 1}></View>
          </Link>
        ))}

        {currentPage < totalPages && (
          <Link href={`/Products?page=${currentPage + 1}`} className='mx-2'>
            <View button={"Next"}></View>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Pagination;