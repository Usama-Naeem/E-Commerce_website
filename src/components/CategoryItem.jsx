import styled from "styled-components";


const Container = styled.div`
  height: 70vh;
  width: 70vw;
  background-color: aqua;
  margin: 20px 5px;
  position: relative;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
 justify-content: space-between;
 object-fit: cover;
`;

const Info = styled.div`
 top: 0;
 bottom: 0;
 position: absolute;
 justify-content: center;
 align-items: center;
 display: flex;
 flex-direction: column;
 width: 100%;
 height: 100%;
`;

const Title = styled.h1`
    color: white;
`;

const Button = styled.button`
    cursor: pointer;
    color: gray;
    background-color: lightpink;
    border: none;
    border-radius: 5%;
    font-weight: 600px;
    
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
