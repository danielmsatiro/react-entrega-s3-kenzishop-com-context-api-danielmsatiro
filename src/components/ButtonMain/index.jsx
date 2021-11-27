import { Content } from "./style";

export const ButtonMain = ({ children, ...rest }) => (
  <Content {...rest}>{children}</Content>
);
