import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "./__components/appSidebar";
import { DataTable } from "@/components/DataTable/dataTable";
import { Product, columns } from "@/components/DataTable/columns";
import { getProducts } from "@/gets/getProducts";
import { auth } from "../api/auth/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  const products = (await getProducts()) as Product[];
  const uniqueCategories = Array.from(
    new Set(products?.map((product) => product.category))
  );

  return (
    <SidebarProvider>
      <AppSidebar categories={uniqueCategories} />
      <SidebarInset>
        <header className="flex sticky top-0 bg-background h-16 shrink-0 items-center gap-2 border-b px-4 z-50">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          {products && products.length >= 0 ? (
            <DataTable columns={columns} data={products} />
          ) : (
            Array.from({ length: 10 }).map((_, index) => (
              <div
                key={index}
                className="aspect-video h-12 w-full rounded-lg bg-muted/50"
              />
            ))
          )}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
