import HeroProducts from "@/components/Hero/heroProducts";

import { getProducts } from "@/gets/getProducts";
import { getCategories } from "@/gets/getCategories";
import { Product } from "@/components/DataTable/columns";
import BodyPage from "./bodyPage";

export default async function ProductPage() {
  const products = (await getProducts()) as Product[];
  const categories = await getCategories();

  return (
    <>
      <main className="Flex flex-1 ">
        <HeroProducts />
      </main>
      <BodyPage
        products={products as Product[]}
        categories={categories as string[]}
      />
    </>
  );
}
