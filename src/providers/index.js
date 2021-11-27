import { CartProvider } from "./cart";
import { ProductsProvider } from "./products";

export const Providers = ({ children }) => {
  return (
    <ProductsProvider>
      <CartProvider>{children}</CartProvider>
    </ProductsProvider>
  );
};
