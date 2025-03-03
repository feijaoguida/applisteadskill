import { Product } from "@/components/DataTable/columns";
import { getProducts } from "@/gets/getProducts";
import DetailProduct from "./_components/detail";

type DetailProductPageProps = {
  params: {
    id: string;
  };
};

export default async function DetailProductPage({
  params,
}: DetailProductPageProps) {
  const ID: number = parseInt(params.id);

  const product: Product = (await getProducts(ID)) as Product;

  console.log("product", product);

  return (
    <div>
      <h1>
        <DetailProduct product={product} />
      </h1>
    </div>
  );
}
