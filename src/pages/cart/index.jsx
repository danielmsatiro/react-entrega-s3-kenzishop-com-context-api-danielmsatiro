import { Divider, IconButton } from "@material-ui/core";
import { useContext } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
/* import { useDispatch } from "react-redux";
import { useSelector } from "react-redux"; */
import { useHistory } from "react-router-dom";
import { ButtonMain } from "../../components/ButtonMain";
import { ButtonText } from "../../components/ButtonText";
import { CartContext } from "../../providers/cart";
/* import {
  decrementToProductThunk,
  incrementToProductThunk,
  removeToCartThunk,
} from "../../store/modules/cart/thunks"; */
import { formatValue } from "../../utils/formatValue";
import { Container, Card, Content, Sumary } from "./style";

export const Cart = () => {
  /* const { cart } = useSelector((store) => store);
  const dispatch = useDispatch(); */
  const { cart, cartRemove, cartDecrement, cartIncrement } =
    useContext(CartContext);
  const history = useHistory();

  const removeProduct = (product) => {
    cartRemove(product);
    /* dispatch(removeToCartThunk(product)); */
  };

  return (
    <Container>
      <ul>
        {cart.map((product) => (
          <>
            <Card key={product.id}>
              <img src={product.image} alt="" />
              <Content>
                <h2>{product.name}</h2>
                <span>
                  Quantidade:
                  <IconButton
                    onClick={() => cartDecrement(product)}
                    /*  onClick={() => dispatch(decrementToProductThunk(product))} */
                  >
                    <MdChevronLeft />
                  </IconButton>
                  <span>
                    {product.quantity === 0
                      ? removeProduct(product)
                      : product.quantity}
                  </span>
                  <IconButton
                    onClick={() => cartIncrement(product)}
                    /* onClick={() => dispatch(incrementToProductThunk(product))} */
                  >
                    <MdChevronRight />
                  </IconButton>
                </span>
              </Content>
              <span>
                {" "}
                Total {formatValue(product.price * product.quantity)}
              </span>
              <ButtonText onClick={() => removeProduct(product)}>
                Remover produto
              </ButtonText>
            </Card>
            <Divider component="hr" sx={{ bgcolor: "var(--purple)" }} />
          </>
        ))}
      </ul>
      <Sumary>
        <h2>Resumo</h2>
        <div>
          <p>
            {cart.reduce((acc, item) => acc + item.quantity, 0) === 1
              ? `1 produto`
              : `${cart.reduce(
                  (acc, item) => acc + item.quantity,
                  0
                )} produtos`}
          </p>
          <span>
            {formatValue(
              cart.reduce((acc, item) => acc + item.quantity * item.price, 0)
            )}
          </span>
        </div>
        <ButtonMain>Finalizar Pedido</ButtonMain>
        <ButtonText onClick={() => history.push("/")}>
          Continuar Comprando
        </ButtonText>
      </Sumary>
    </Container>
  );
};
