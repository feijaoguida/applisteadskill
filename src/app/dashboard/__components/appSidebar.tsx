"use client";

import * as React from "react";
import { ChevronRight, Command } from "lucide-react";

// import { SearchForm } from "@/components/search-form";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar";

import Image from "next/image";

import { useSidebar } from "@/components/ui/sidebar";

type AppSidebarProps = {
  props?: React.ComponentProps<typeof Sidebar>;
  categories: string[];
};

export function AppSidebar({ categories, ...props }: AppSidebarProps) {
  //const [selectCategory, setSelectCategory] = React.useState("Todas");

  const { selectedCategory, setSelectedCategory } = useSidebar();

  const dataCategories = [
    {
      title: "Categorias",
      items: [
        { title: "Todas", url: "#" },
        ...categories.map((category) => ({ title: category, url: "#" })),
      ],
    },
  ];

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Image src="/globe.svg" alt="Logo" width={40} height={40} />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">EADSkills</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        {/* <SearchForm /> */}
      </SidebarHeader>
      <SidebarContent className="gap-0">
        <SidebarSeparator className="mx-0" />
        {/* We create a collapsible SidebarGroup for each parent. */}
        {dataCategories.map((category) => (
          <Collapsible
            key={category.title}
            title={category.title}
            defaultOpen
            className="group/collapsible"
          >
            <SidebarGroup>
              <SidebarGroupLabel
                asChild
                className="group/label text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              >
                <CollapsibleTrigger>
                  {category.title}{" "}
                  <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {category.items.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton
                          asChild
                          onClick={() => setSelectedCategory(item.title)}
                          isActive={item.title === selectedCategory}
                        >
                          <span className="cursor-pointer">{item.title}</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
