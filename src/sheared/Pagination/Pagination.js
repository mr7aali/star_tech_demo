import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className='pagination flex flex-wrap justify-center'>
      {pageNumbers.map((number) => (
        <li
          key={number}
          className={`page-item m-1 ${
            currentPage === number
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-800 hover:bg-gray-100"
          }`}>
          <button
            className='page-link px-3 py-1 rounded-full'
            onClick={() => onPageChange(number)}>
            {number}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;