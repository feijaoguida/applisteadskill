"use client";

import { useState } from "react";
import EditForm from "@/components/forms/editForm";
import IconMenu from "@/components/iconMenu";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Row } from "@tanstack/react-table";
import { MoreHorizontal, SquarePen, Trash2 } from "lucide-react";
import { DialogResponsive } from "./dialog";
import { Product } from "./columns";
import DeleteForm from "../forms/deleteForm";

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const product = row.original as Product;
  return (
    <>
      <DialogResponsive
        isOpen={isEditOpen}
        setIsOpen={setIsEditOpen}
        title="Editar"
      >
        <EditForm product={product} setIsOpen={setIsEditOpen} />
      </DialogResponsive>
      <DialogResponsive
        isOpen={isDeleteOpen}
        setIsOpen={setIsDeleteOpen}
        title="Delete Person"
        description="Are you sure you want to delete this person?"
      >
        <DeleteForm product={product} setIsOpen={setIsDeleteOpen} />
      </DialogResponsive>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[160px] z-50">
          <DropdownMenuItem className="group flex w-full items-center justify-between  text-left p-0 text-sm font-base text-neutral-500 ">
            <button
              onClick={() => {
                setIsEditOpen(true);
              }}
              className="w-full justify-start flex rounded-md p-2 transition-all duration-75 hover:bg-neutral-100"
            >
              <IconMenu
                text="Editar"
                icon={<SquarePen className="h-4 w-4" />}
              />
            </button>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="group flex w-full items-center justify-between  text-left p-0 text-sm font-base text-neutral-500 ">
            <button
              onClick={() => {
                setIsDeleteOpen(true);
              }}
              className="w-full justify-start flex text-red-500 rounded-md p-2 transition-all duration-75 hover:bg-neutral-100"
            >
              <IconMenu text="Deletar" icon={<Trash2 className="h-4 w-4" />} />
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
