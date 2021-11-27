/* import { useDispatch, useSelector } from "react-redux"; */
import { Card, Container } from "./style";
import toast from "react-hot-toast";
/* import {
  addToCartThunk,
  incrementToProductThunk,
} from "../../store/modules/cart/thunks"; */
import { formatValue } from "../../utils/formatValue";
import { ButtonMain } from "../../components/ButtonMain";
import { useContext } from "react";
import { ProductsContext } from "../../providers/products";
import { CartContext } from "../../providers/cart";

export const Shop = () => {
  /* const { products, cart } = useSelector((store) => store);
  const dispatch = useDispatch(); */
  const { products } = useContext(ProductsContext);
  const { cart, cartAdd, cartIncrement } = useContext(CartContext);

  const addNewProduct = (product) => {
    cartAdd(product);
    /* dispatch(addToCartThunk(product)); */
  };

  const incrementQuantity = (product) => {
    cartIncrement(product);
    /* dispatch(incrementToProductThunk(product)); */
  };

  const handleShop = (product) => {
    toast.success("Produto adicionado ao carrinho");
    if (cart.every((item) => item.id !== product.id)) {
      return addNewProduct({ ...product, quantity: 1 });
    }
    return incrementQuantity(product);
  };

  return (
    <Container>
      <ul>
        {products.map((product) => (
          <Card key={product.id}>
            <img src={product.image} alt="" />
            <h2>{product.name}</h2>
            <span>{formatValue(product.price)}</span>
            <ButtonMain onClick={() => handleShop(product)}>
              Adicionar ao Carrinho
            </ButtonMain>
          </Card>
        ))}
      </ul>
    </Container>
  );
};
