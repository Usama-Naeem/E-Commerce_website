import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons"
import styled from "styled-components"


const Container=styled.div`
min-width: 280px;
min-height: 350 px;
flex: 1;
display: flex;
margin: 5px;
position: relative;
background-color: #f5fbfd;
align-items: center;
justify-content: center;


`

const Image = styled.img`
height: 65%;
width: 70%;



`
const Info = styled.div`
justify-content: center;
align-items: center;
display: flex;
top: 0;
left: 0;
position: absolute;
z-index: 3;


`

const Icon= styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
transition: all 0.5s ease;

&:hover {
  background-color: #e9f5f5;
  transform: scale(1.1);
}
`



const Products = ({item}) => {
  return (
    <Container>
     <Image src={item.img} />
     <Info> 
       <Icon> 
<ShoppingCartOutlined/>
       </Icon>
       <Icon> 
         <SearchOutlined/>
       </Icon>
       <Icon> <FavoriteBorderOutlined/> </Icon>
     </Info>
    </Container>
  )
}

export default Products