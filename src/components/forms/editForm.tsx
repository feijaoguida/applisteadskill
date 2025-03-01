"use client";

import React, { Dispatch, SetStateAction } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Product } from "../DataTable/columns";
import { Api } from "@/lib/api";
import { toast } from "sonner";

const formSchema = z.object({
  title: z.string().min(1),
  price: z.number(),
  description: z.string().min(1),
  category: z.string().min(1),
  image: z.string().min(1),
  rating: z.object({
    rate: z.number(),
    count: z.number(),
  }),
});

export default function EditForm({
  product,
  setIsOpen,
}: {
  product: Product;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: product?.title,
      price: product?.price,
      description: product?.description,
      category: product?.category,
      image: product?.image,
      rating: {
        rate: product?.rating.rate,
        count: product?.rating.count,
      },
    },
  });

  const isLoading = form.formState.isSubmitting;
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const result = await Api.put(`/products/${product.id}`, values);
      toast.success("Sucesso.", {
        description: `Produto ${result?.data?.title} atualizado com sucesso.`,
        duration: 3000,
      });
      setIsOpen(false);
    } catch (error) {
      toast.warning("Erro.", {
        description: `Produto ${product.title} não foi atualizado.`,
        duration: 3000,
      });
      console.log(error);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col space-y-2 sm:px-0 px-4"
      >
        <FormField
          name="title"
          control={form.control}
          render={({ field }) => (
            <FormItem className="col-span-2 md:col-span-1">
              <FormLabel>Titulo</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Calça Jeans"
                  className="text-md"
                  required
                  autoFocus
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="price"
          control={form.control}
          render={({ field }) => (
            <FormItem className="col-span-2 md:col-span-1">
              <FormLabel>Preço</FormLabel>
              <FormControl>
                <Input {...field} className="text-md" required type="number" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="description"
          control={form.control}
          render={({ field }: { field: any }) => (
            <FormItem className="col-span-2 md:col-span-1">
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="John has been coding for 10 years."
                  className="text-md"
                  required
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="category"
          control={form.control}
          render={({ field }) => (
            <FormItem className="col-span-2 md:col-span-1">
              <FormLabel>Categoria</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Roupas"
                  className="text-md"
                  required
                  readOnly={true}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="image"
          control={form.control}
          render={({ field }) => (
            <FormItem className="col-span-2 md:col-span-1">
              <FormLabel>Imagem</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="https://example.com/image.jpg"
                  className="text-md"
                  required
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex w-full sm:justify-end mt-4">
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full sm:w-auto bg-orangeead"
          >
            <>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Salvando...
                </>
              ) : (
                "Salvar"
              )}
            </>
          </Button>
        </div>
      </form>
    </Form>
  );
}
