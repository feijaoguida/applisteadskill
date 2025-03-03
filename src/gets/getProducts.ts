import { Product } from "@/components/DataTable/columns";
import { Api } from "@/lib/api";

export async function getProducts(
  id?: number
): Promise<Product | Product[] | void> {
  try {
    if (id) {
      const response = await Api.get(`products/${id}`);

      return response.data as Product;
    } else {
      const response = await Api.get("products");

      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
}
