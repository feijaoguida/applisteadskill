"use client";

import { ColumnDef, filterFns } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "../ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { limitarTexto } from "@/lib/limitarTexto";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DataTableRowActions } from "./dataTableRowAction";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export const columns: ColumnDef<Product>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value: any) =>
          table.toggleAllPageRowsSelected(!!value)
        }
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value: any) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "image",
    header: "avatar",
    cell: ({ row }) => {
      const image: string = row.getValue("image");
      const title: string = row.getValue("title");

      return (
        <Avatar>
          <AvatarImage src={image} alt="title" />
          <AvatarFallback>{title}</AvatarFallback>
        </Avatar>
      );
    },
  },
  {
    accessorKey: "title",
    header: "Título",
    cell: ({ row }) => {
      const title: string = row.getValue("title");
      const formatedTitle = limitarTexto(title);

      return (
        <div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <span className="font-medium">{formatedTitle}</span>;
              </TooltipTrigger>
              <TooltipContent>
                <span>{title}</span>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      );
    },
  },
  {
    accessorKey: "category",
    header: "Categoria",
    filterFn: filterFns.equals,
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <div className="text-right">Preço</div>
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("price"));
      const formatted = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(price);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
