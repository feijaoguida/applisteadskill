import { HeroHome } from "@/components/Hero/heroHome";
import ProductPagination from "@/components/ProductsPagination/productPagination";

import { getProducts } from "@/gets/getProducts";

export default async function ProductPage() {
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
              Shop
            </h1>
          </div>
          <ProductPagination products={products!} />
        </section>
      </div>
    </>
  );
}
