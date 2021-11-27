import { Badge, Divider, IconButton } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
/* import { useSelector } from "react-redux"; */
import { useHistory } from "react-router";
import { Container, Content } from "./style";
import { MdLogin } from "react-icons/md";
import { useContext } from "react";
import { CartContext } from "../../providers/cart";

export const Header = () => {
  /* const { cart } = useSelector((store) => store); */
  const { cart } = useContext(CartContext);
  const history = useHistory();

  return (
    <Container>
      <h1 onClick={() => history.push("/")}>Baby's Kenzie Shop</h1>
      <Content>
        <IconButton aria-label="cart" onClick={() => history.push("/cart")}>
          <Badge badgeContent={cart.length} color="primary">
            <ShoppingCart />
          </Badge>
        </IconButton>
        <IconButton>
          <MdLogin />
        </IconButton>
      </Content>
      <Divider component="hr" />
    </Container>
  );
};
