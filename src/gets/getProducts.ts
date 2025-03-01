import { Product } from "@/components/DataTable/columns";
import { Api } from "@/lib/api";

export async function getProducts(): Promise<[Product] | void> {
  try {
    const response = await Api.get("products");

    return response.data;
  } catch (error) {
    console.log(error);
  }
}
