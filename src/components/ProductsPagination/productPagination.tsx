"use client";

import { Product } from "../DataTable/columns";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { usePagination } from "@/hooks/usePagination";
import Cards from "../CardProducts/card-products";

type ProductsProps = {
  products: Product[];
};

export default function ProductPagination({ products }: ProductsProps) {
  const {
    actualPage,
    getItemsPage,
    handleBackPage,
    handleNextPage,
    handleClickPage,
    totalPages,
  } = usePagination(products!, 9);
  return (
    <>
      <div className="grid gap-6 p-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {getItemsPage()?.map((product, index) => (
          <div key={index}>
            <Cards product={product} />
          </div>
        ))}
      </div>

      <Pagination className="mt-4 mb-4">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" onClick={handleBackPage} />
          </PaginationItem>
          {Array.from({ length: totalPages }).map((_, index) => {
            return (
              <PaginationItem>
                <PaginationLink
                  key={index}
                  onClick={() => handleClickPage(index + 1)}
                  isActive={actualPage === index + 1}
                  href="#"
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            );
          })}
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" onClick={handleNextPage} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}
