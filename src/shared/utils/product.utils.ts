import { SectionData } from "../../ViewModels/Home/interfaces/section-data";
import { Product } from "../interfaces/https/get-products";

export const formatProductsToSections = (
  products: Product[]
): SectionData[] => {
  const grouped = products.reduce((acc, product) => {
    const category = product.category;

    if (!acc[category]) {
      acc[category] = [];
    }

    acc[category].push(product);
    return acc;
  }, {} as Record<string, Product[]>);

  return Object.entries(grouped).map(([title, data]) => ({
    title,
    data,
  }));
};
