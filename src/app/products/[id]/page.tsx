import { Product } from "@/components/DataTable/columns";
import { getProducts } from "@/gets/getProducts";
import DetailProduct from "./_components/detail";

export default async function DetailProductPage(props: {
  params: Promise<{ id: string }>;
}) {
  const { params } = props;
  const { id } = await params;
  const ID: number = parseInt(id);

  const product: Product = (await getProducts(ID)) as Product;

  return (
    <div>
      <h1>
        <DetailProduct product={product} />
      </h1>
    </div>
  );
}
