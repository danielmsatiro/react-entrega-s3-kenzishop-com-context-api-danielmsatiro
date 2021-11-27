import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 10px auto;
  padding: 0px 10px;
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  li {
    width: 30%;
    min-width: 340px;
  }

  img {
    width: 150px;
    height: 150px;
  }
`;

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border: transparent solid 1px;
  border-radius: 5px;
  padding: 10px;
  margin: 10px 0px;
  background-color: var(--light-green);
  /* background-image: linear-gradient(transparent, var(--light-green)); */
  box-shadow: 2px 2px 5px 1px var(--purple);
  max-width: 1600px;
  img {
    border-radius: 5px;
    box-shadow: 2px 2px 5px 1px var(--dark-green);
  }
  h2 {
    text-shadow: 1px 1px 2px var(--dark-green);
    text-align: center;
  }
  span {
    font-weight: bold;
    color: black;
    text-shadow: 1px 1px 2px white;
  }
  img,
  h2,
  span,
  button {
    margin-bottom: 15px;
  }
`;
