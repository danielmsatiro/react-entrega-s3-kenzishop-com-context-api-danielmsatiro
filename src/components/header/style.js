import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  h1 {
    padding: 15px;
    font-size: 18px;
    font-family: "Pacifico";
    color: #79a860;
    text-shadow: 1px 1px 2px black;
    cursor: pointer;
  }
  hr {
    width: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
`;
