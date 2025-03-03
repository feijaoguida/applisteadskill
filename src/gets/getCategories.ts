import { Api } from "@/lib/api";

export async function getCategories(): Promise<[string] | void> {
  try {
    const response = await Api.get("products/categories");

    return response.data;
  } catch (error) {
    console.log(error);
  }
}
