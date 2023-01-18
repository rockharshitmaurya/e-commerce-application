import React from "react";
import styled from "styled-components";
import { categories } from "../data";
import CategoryItemm from "./CategoryItemm";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-around;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;
const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItemm item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
