import { ProductCard as ProductCardHOC } from "./ProductCard";
import { ProductCardHOCProps } from "../interfaces/Products.interfaces";

import ProductButtons from "./ProductButtons";
import ProductImage from "./ProductImage";
import ProductTitle from "./ProductTitle";
//export { default as ProductCard } from "./ProductCard";
export { default as ProductButtons } from "./ProductButtons";
export { default as ProductImage } from "./ProductImage";
export { default as ProductTitle } from "./ProductTitle";

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons,
});

export default ProductCard;
