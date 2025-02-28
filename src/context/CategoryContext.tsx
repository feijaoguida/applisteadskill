"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface CategoryContextType {
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
}

const CategoryContext = createContext<CategoryContextType | undefined>(
  undefined
);

interface CategoryProviderProps {
  children: ReactNode;
}

export function CategoryProvider({ children }: CategoryProviderProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </CategoryContext.Provider>
  );
}

export function useCategory() {
  const context = useContext(CategoryContext);
  if (context === undefined) {
    throw new Error("useCategory deve ser usado dentro de um CategoryProvider");
  }
  return context;
}
