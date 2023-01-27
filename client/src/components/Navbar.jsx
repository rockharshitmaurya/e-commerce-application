import {
  Search,
  Shop2Outlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import styled from "styled-components";
// import "../"
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

//

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SerachContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 5px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
`;

const Logo = styled.h1`
  color: black;
  text-align: center;
  ${mobile({ fontSize: "24px", paddingLeft: "15px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "8px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const user = useSelector((state) => state.user.currentUser);
  const cart = useSelector((state) => state.cart);
  const quantity = cart.quantity;
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>En</Language>
          <SerachContainer>
            <Input placeholder="Search"></Input>
            <Search style={{ color: "gray", fontSize: "16px" }}></Search>
          </SerachContainer>
        </Left>
        <Center>
          <Logo>Shopspree</Logo>
        </Center>
        <Right>
          {!user && (
            <>
              <Link to="/register" className="link">
                <MenuItem>REGISTER</MenuItem>
              </Link>
              <Link to="/login" className="link">
                <MenuItem>SIGHN IN</MenuItem>
              </Link>
            </>
          )}
          {user && <MenuItem>{user.username}</MenuItem>}
          <Link to="/cart" className="link">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
