import { HeroHome } from "@/components/Hero/heroHome";
import { getProducts } from "@/gets/getProducts";
import React from "react";

import Cards from "@/components/CardProducts/card-products";
import Link from "next/link";

export default async function Home() {
  const products = await getProducts();

  return (
    <>
      <main className="Flex flex-1 ">
        <HeroHome />
      </main>
      <div className="flex flex-col items-center  w-full bg-blueead">
        <section className="container bg-zinc-200">
          <div className="flex mt-10 p-4 items-center justify-between">
            <h1 className="text-3xl text-center font-bold text-orangeead ">
              Mais bem avaliados
            </h1>
            <div>
              <Link
                href="/products"
                className="text-center italic text-orangeead hover:underline"
              >
                Ver todos
              </Link>
            </div>
          </div>
          <div className="grid gap-6 p-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {products
              ?.filter((product) => product.rating.rate >= 4.5)
              .slice(0, 3)
              .map((product, index) => (
                <div key={index}>
                  <Cards product={product} />
                </div>
              ))}
          </div>
        </section>
        <section className="container bg-zinc-200">
          <div className="flex mt-10 p-4 items-center justify-between">
            <h1 className="text-3xl text-center font-bold text-orangeead ">
              Shop
            </h1>
            <div>
              <Link
                href="/products"
                className="text-center italic text-orangeead hover:underline"
              >
                Ver todos
              </Link>
            </div>
          </div>
          <div className="grid gap-6 p-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {products?.slice(0, 6).map((product, index) => (
              <Cards key={index} product={product} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
