import React from "react";
import dynamic from "next/dynamic";
const Card = dynamic(() => import("@/sheared/Card/ProductCard"));
import imgs from "@/assets/HomeImage/HomeImage";
const Product = () => {
  return (
    <div className='container mx-auto'>
      <h1> Product component</h1>
      <div className='flex justify-between gap-4'>
        {imgs.map((img, index) => (
          <div key={index}>
            <Card img={img} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
