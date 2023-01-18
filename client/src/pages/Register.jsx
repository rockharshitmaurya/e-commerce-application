import React from "react";
import styled from "styled-components";
import {mobile} from "../responsive";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
font-size: 54px;
font-weight: 400;


`;

const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;
border-radius: 5px;
`;

const Form = styled.form`
display: flex;
flex-wrap: wrap;
`;

const Agreement = styled.p`
font-size: 12px;
margin: 20px 0px;

`;

const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color:white;
cursor: pointer;
border-radius: 5px;

`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create and Account</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="email" />
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error tenetur adipisci enim qui? Quis, recusandae odit! Quam molestiae minima atque magni accusantium consequatur, suscipit at officiis voluptatem possimus nemo natus!</Agreement>
          <Button>Create</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
