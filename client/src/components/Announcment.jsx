import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size:14px;
    font-weight: 500px;

`


const Announcment = () => {
  return (
    <Container>
        Super Duper Deal! Free Shipping on Orders Over $50
    </Container>
  )
}

export default Announcment