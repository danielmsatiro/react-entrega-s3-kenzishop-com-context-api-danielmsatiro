import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 10px auto;
  padding: 0px 10px;
  max-width: 1600px;
  ul {
    display: column;
    flex-wrap: wrap;
    background-color: var(--light-green);
    box-shadow: 2px 2px 5px 1px var(--dark-green);
  }
  li {
    min-width: 340px;
  }

  img {
    width: 150px;
    height: 150px;
  }
`;

export const Card = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px;
  margin: 10px 0px;
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

export const Content = styled.div`
  width: 340px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 15px;
  span {
    display: flex;
    align-items: center;
  }
`;

export const Sumary = styled.div`
  margin: 15px;
  background-color: #f5bdf5;
  width: 300px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  box-shadow: 2px 2px 5px 1px var(--purple);
  h2,
  div,
  p,
  span,
  button {
    margin-bottom: 10px;
  }
  span {
    font-weight: bold;
  }
`;
