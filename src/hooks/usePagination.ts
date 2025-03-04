"use client";
import { Product } from "@/components/DataTable/columns";
import { useState } from "react";

export const usePagination = (data: Array<Product>, itensPerPage: number) => {
  const [actualPage, setActualPage] = useState(1);
  const totalPages = Math.ceil(data.length / itensPerPage);

  const handleBackPage = () => {
    setActualPage((prevState) => prevState - 1);
  };

  const handleNextPage = () => {
    setActualPage((prevState) => prevState + 1);
  };

  const handleClickPage = (page: number) => {
    setActualPage(page);
  };

  const getItemsPage = () => {
    const firstIndex = (actualPage - 1) * itensPerPage;
    const lastIndex = actualPage * itensPerPage;

    return data.slice(firstIndex, lastIndex);
  };

  return {
    actualPage,
    totalPages,
    handleBackPage,
    handleNextPage,
    handleClickPage,
    getItemsPage,
  };
};
