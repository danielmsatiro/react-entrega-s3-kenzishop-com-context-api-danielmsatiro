import { Content } from "./style";

export const ButtonText = ({ children, ...rest }) => (
  <Content {...rest}>{children}</Content>
);
