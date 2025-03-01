import React, { Dispatch, SetStateAction } from "react";
import { Product } from "../DataTable/columns";

export default function DeleteForm({
  product,
  setIsOpen,
}: {
  product: Product;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div>
      <h1>Deletar</h1>
      <p>Tem certeza que deseja deletar o produto {product.title}?</p>
      <button onClick={() => setIsOpen(false)}>Cancelar</button>
      <button onClick={() => setIsOpen(false)}>Deletar</button>
    </div>
  );
}
