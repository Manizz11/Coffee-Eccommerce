export type ProductType = {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category?: string;
};

export const products: ProductType[] = [
  { id: 1, name: "Dark Roast Coffee", price: 18, image: "/bg1.webp", description: "Strong and bold dark roast coffee with rich flavor." },
  { id: 2, name: "Espresso Beans", price: 22, image: "/bg2.webp", description: "Premium espresso beans for powerful  energy." },
  { id: 3, name: "Cold Brew", price: 16, image: "/bg3.webp", description: "Smooth and refreshing cold brew coffee." },
  { id: 4, name: "Vanilla Latte", price: 20, image: "/bg4.webp", description: "Creamy vanilla latte with smooth roasted coffee.", category: "Latte" },
  { id: 5, name: "Mocha Blend", price: 24, image: "/bg5.webp", description: "Chocolate flavored mocha blend for rich taste lovers.", category: "Mocha" },
  { id: 6, name: "Caramel Cappuccino", price: 21, image: "/bg6.webp", description: "Sweet caramel cappuccino with silky foam.", category: "Cappuccino" },
  { id: 7, name: "Hazelnut Coffee", price: 19, image: "/bg7.webp", description: "Nutty hazelnut flavored coffee with deep aroma.", category: "Flavored" },
  { id: 8, name: "Iced Americano", price: 15, image: "/bg8.webp", description: "Refreshing iced americano with bold espresso flavor.", category: "Iced Coffee" },
  { id: 9, name: "Pumpkin Spice Latte", price: 23, image: "/bg9.webp", description: "Seasonal pumpkin spice latte with warm spices.", category: "Seasonal" },
  { id: 10, name: "French Vanilla Roast", price: 20, image: "/ground.webp", description: "French vanilla roast with smooth creamy texture.", category: "Vanilla" },
  { id: 11, name: "Black Energy Coffee", price: 26, image: "/bg2.webp", description: "Extra caffeine coffee inspired by Death Wish style.", category: "Energy Coffee" },
  { id: 12, name: "Signature House Blend", price: 17, image: "/bg3.webp", description: "Balanced signature blend crafted for daily coffee lovers.", category: "House Blend" },
];
