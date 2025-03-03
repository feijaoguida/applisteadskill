"use client";

import { Product } from "@/components/DataTable/columns";
import Image from "next/image";
import StarRatings from "react-star-ratings";

type DetailProductProps = {
  product: Product;
};

export default function DetailProduct({ product }: DetailProductProps) {
  return (
    <div className="flex container w-screen mx-auto  ">
      <div className="mx-auto flex flex-col md:flex-row items-center justify-center w-screen md:ml-auto lg:items-start lg:text-left">
        <Image
          width={400}
          height={400}
          src={product.image}
          alt={product.title}
          className="rounded-xl pt-14"
        />
        <div className="flex flex-col gap-5 p-14">
          <h3 className="text-3xl font-semibold lg:text-5xl">
            {product.title}
          </h3>
          <p className="text-muted-foreground lg:text-lg">
            {product.description}
          </p>
          <h3 className="text-3xl font-semibold lg:text-5xl">
            {product.price}
          </h3>
          <StarRatings
            rating={product.rating.rate}
            starDimension="20px"
            starSpacing="1px"
            starRatedColor="#f0c14b"
          />
        </div>
      </div>
    </div>
  );
}
