import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 20px;
  border-radius: 50%;
  color: white;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.bg};
  align-items: center;
  cursor: pointer;
  ${mobile({ flexDirection: "column" })}
`;
const SocialContianer = styled.div`
  display: flex;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Shopspree</Logo>
        <Desc>
          ShopSpree is an e-commerce platform that offers a wide variety of
          products at unbeatable prices. With ShopSpree, customers can easily
          browse and purchase products across a range of categories including
          clothing, electronics, home goods, and more. We pride ourselves on our
          user-friendly interface and fast, reliable shipping. Our goal is to
          make online shopping a breeze for our customers, allowing them to find
          the products they need and get them delivered to their door as quickly
          as possible. With ShopSpree, you'll be able to find everything you
          need in one convenient location.
        </Desc>
        <SocialContianer>
          <SocialIcon bg="red">
            <Facebook />
          </SocialIcon>
          <SocialIcon bg="green">
            <Instagram />
          </SocialIcon>
          <SocialIcon bg="teal">
            <Twitter />
          </SocialIcon>
        </SocialContianer>
      </Left>
      <Center>
        <Title>Useful List</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Clothing</ListItem>
          <ListItem>Women Clothing</ListItem>
          <ListItem>Child Fashion</ListItem>
          <ListItem>Account</ListItem>
          <ListItem>Contact US</ListItem>
          <ListItem>About us ❤️</ListItem>
        </List>
      </Center>
      <Right>
        <Title>About Us</Title>
        
      </Right>
    </Container>
  );
};

export default Footer;
