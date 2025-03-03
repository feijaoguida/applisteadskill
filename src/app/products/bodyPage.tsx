"use client";

import { Product } from "@/components/DataTable/columns";
import ProductPagination from "@/components/ProductsPagination/productPagination";
import { Button } from "@/components/ui/button";
import { useState } from "react";

type bodyProps = {
  products: Product[];
  categories: string[];
};

export default function BodyPage({ products, categories }: bodyProps) {
  const [filteredProducts, setFilteredProducts] = useState<Product[] | void>(
    products
  );

  const handleCategory = async (category: string) => {
    if (category === "Todas") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products?.filter((product) => product.category === category)
      );
    }
  };

  return (
    <div className="flex flex-col items-center  w-full bg-blueead">
      <section className="container bg-zinc-200">
        <div className="flex mt-10 p-4 items-center justify-between">
          <h1 className="text-3xl text-center font-bold text-orangeead ">
            Shop
          </h1>
        </div>
        <div className="flex  flex-row w-full mx-auto px-5 ">
          <div className="w-1/5 lg:grid md:grid-cols-3 lg:grid-cols-1 mt-8 lg:mt-0 gap-10 max-w-sm md:max-w-full hidden">
            <div>
              <h3 className="text-xl font-medium ">Categorias</h3>
              <ul className="grid gap-3 mt-6">
                <li className="text-gray-500">
                  <Button
                    variant={"link"}
                    onClick={() => handleCategory("Todas")}
                  >
                    <label className="flex items-center gap-3">
                      <div>Todas</div>
                    </label>
                  </Button>
                </li>
                {categories?.map((category) => (
                  <li key={category} className="text-gray-500">
                    <Button
                      variant={"link"}
                      onClick={() => handleCategory(category)}
                    >
                      <label className="flex items-center gap-3">
                        <div>{category}</div>
                      </label>
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex-1 w-full flex-col">
            <ProductPagination products={filteredProducts!} />
          </div>
        </div>
      </section>
    </div>
  );
}
