import styled from "styled-components"
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import { Add, Remove } from "@material-ui/icons"


const Container = styled.div``

const Wrapper = styled.div`
display: flex;
padding: 37px;
`

const ImgContainer = styled.div`
flex:1;
`

const Image = styled.img`
width: 75%;
height: 85vh;


`

const InfoContainer = styled.div`
flex:1;
`

const InfoTitle = styled.h2`
font-weight: 200;
font-size: 25;
`

const Desc = styled.p`
margin: 15px 0px;
`

const Price = styled.span`
font-size: 35px;
font-weight: 100;

`

const FilterColor = styled.div`
display: flex;
margin: 20px 0px;
`

const ColorContainer = styled.div`
display: flex;

`

const ColorTitle = styled.h3`
font-weight: 200;
font-size: 20px;
`

const ColorOption = styled.div`
height: 20px;
width: 20px;
border-radius: 50%;
background-color: ${(props) => props.color};
margin-left: 9px;
cursor: pointer;
`


const SizeContainer = styled.div`
display: flex;
margin-left: 35px;
`

const SizeTitle = styled.h3`
font-weight: 200;
font-size: 20px;
margin-right: 10px;
`

const Select = styled.select``

const Option = styled.option``

const FilterCart = styled.div`
display: flex;
margin-top: 45px;
`

const CartContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;

`

const Ammount = styled.span`
width: 25px;
height: 25px;
border-radius: 8px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;

`

const Button = styled.button`
margin-left: 95px;
font-weight: 500;
align-items: center;
padding: 7px;
border: 2px solid teal;
background-color: white;
cursor: pointer;

&:hover{

    background-color: #f8f4f4;
}
`




const Product = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImgContainer>
                    <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />

                </ImgContainer>
                <InfoContainer>
                    <InfoTitle> Denim Jumpsuit</InfoTitle>
                    <Desc> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit, erat non iaculis volutpat, ex eros feugiat purus, in vehicula ligula dolor vel ligula. Sed scelerisque iaculis rutrum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus molestie dignissim hendrerit.</Desc>
                    <Price> $ 25 </Price>
                    <FilterColor>
                        <ColorContainer>
                            <ColorTitle> Color </ColorTitle>
                            <ColorOption color="#070708" />
                            <ColorOption color="#090933" />
                            <ColorOption color="#625f66" />
                        </ColorContainer>

                        <SizeContainer>
                            <SizeTitle>Size: </SizeTitle>
                            <Select>
                                <Option>M</Option>
                                <Option>L</Option>
                                <Option>XL</Option>
                                <Option>XXL</Option>
                                <Option>ML</Option>
                            </Select>

                        </SizeContainer>

                    </FilterColor>
                    <FilterCart>
                        <CartContainer>
                            <Remove />
                            <Ammount>1</Ammount>
                            <Add />
                        </CartContainer>
                        <Button>ADD TO CART</Button>
                    </FilterCart>
                </InfoContainer>
            </Wrapper>

        </Container>
    )
}

export default Product