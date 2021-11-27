import styled from "styled-components";

export const Content = styled.button`
  padding: 10px;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  text-shadow: 1px 1px 2px var(--dark-green);
  background-color: var(--purple);
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    background-color: var(--dark-green);
    transform: scale(1.05);
  }
`;
