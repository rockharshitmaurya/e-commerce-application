import React, { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 54px;
  font-weight: 400;
`;

const Input = styled.input`
  flex: 1;
  min-width: 50%;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 20px;
  text-decoration: underline;
  cursor: pointer;
`;

const Button = styled.button`
  width: 50%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  margin-bottom: 5px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const bodyStyles = {
  background:
    "linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(https://st3.depositphotos.com/1177973/13382/i/600/depositphotos_133827136-stock-photo-beautiful-woman-in-fashion-clothes.jpg) center center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const Error = styled.div`
  color: red;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <Container style={bodyStyles}>
      <Wrapper>
        <Title>Log In</Title>
        <Form>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />

          <Input
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />

          <Button onClick={handleClick} disabled={isFetching}>
            Login
          </Button>
          {error && <Error>Something went wrong.</Error>}
          <Link href="#">Forget Password?</Link>
          <Link href="/register">Create a Account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
