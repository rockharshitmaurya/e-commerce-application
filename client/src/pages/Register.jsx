import React, { useState } from "react";
import styled from "styled-components";
import { register } from "../redux/apiCalls";
import { mobile } from "../responsive";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

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
  color: white;
  cursor: pointer;
  border-radius: 5px;
`;

const toastOptions = {
  position: "bottom-right",
  autoClose: 8000,
  pauseOnHover: true,
  draggable: true,
  theme: "dark",
};

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [email, setEmail] = useState("");

  function handleToastClose() {
    navigate("/login");
  }
  const handleClick = (e) => {
    e.preventDefault();

    if (handleValidation()) {
      register({
        username,
        email,
        password,
      })
        .then((res) => {
          if (res.status === 201) {
            toast.success("You have been registered successfully", {
              position: toast.POSITION.TOP_LEFT,
              onClose: handleToastClose,
              autoClose: 3000,
            });
          }
        })
        .catch((err) => {
          toast.warning(err, {
            position: toast.POSITION.TOP_LEFT,
          });
        });
    }
  };

  const handleValidation = () => {
    if (password !== cpassword) {
      toast.error("Password and Confirm Does Not Matched", toastOptions);
      return false;
    } else if (username.length < 3) {
      toast.error("Username Should be Greater than 3 Characters", toastOptions);
      return false;
    } else if (password.length < 8) {
      toast.error("Password Should be Greater than 8 Characters", toastOptions);
      return false;
    } else if (email === "") {
      toast.error("Please Enter Your Email.", toastOptions);
      return false;
    } else {
      return true;
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>Create and Account</Title>
        <Form>
          <Input placeholder="name" />
          <Input
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            placeholder="confirm password"
            onChange={(e) => setCPassword(e.target.value)}
          />
          <Agreement>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
            tenetur adipisci enim qui? Quis, recusandae odit! Quam molestiae
            minima atque magni accusantium consequatur, suscipit at officiis
            voluptatem possimus nemo natus!
          </Agreement>
          <ToastContainer />
          <Button onClick={handleClick}>Create</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
