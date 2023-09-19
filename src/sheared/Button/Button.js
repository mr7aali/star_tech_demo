import React from "react";

const Button = ({ button, icon }) => {
  return (
    <button
      className='text-white bg-[#081621] hover:bg-[#081621] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
      aria-label={button}>
      {icon}
    </button>
  );
};

export default Button;
