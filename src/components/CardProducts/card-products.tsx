"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Product } from "../DataTable/columns";
import Link from "next/link";
import Image from "next/image";
import { limitarTexto } from "@/lib/limitarTexto";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "../ui/button";
import StarRatings from "react-star-ratings";
interface CardsProps {
  product: Product;
}

export default function Cards({ product }: CardsProps) {
  const link = `/product/${product.id}`;
  return (
    <div>
      <Card key={product?.id} className="grid grid-rows-[auto_auto_1fr_auto]">
        <div className="aspect-[16/9] w-full ">
          <Link
            href={link}
            className="transition-opacity duration-200 fade-in hover:opacity-70"
          >
            <Image
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover object-top rounded-t-lg rounded-r-lg"
              width={1000}
              height={1000}
            />
          </Link>
        </div>
        <CardHeader>
          <h3 className="text-lg font-semibold hover:underline md:text-xl">
            <Link href={link} target="_blank">
              {limitarTexto(product.title)}
            </Link>
          </h3>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            {limitarTexto(product.description, 80)}
          </p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button className="">
            <Link
              href={link}
              target="_blank"
              className="flex text-white items-center hover:underline"
            >
              Detalhes
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
          <div className="flex items-center gap-1">
            {/* {[...Array(Math.trunc(product.rating.rate))].map((_, index) => (
              <Star
                key={index}
                className="size-5 fill-yellow-400 text-yellow-400"
              />
            ))} */}
            <StarRatings
              rating={product.rating.rate}
              starDimension="20px"
              starSpacing="1px"
              starRatedColor="#f0c14b"
            />
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
