import { Facebook, FaceOutlined, Instagram, MailOutlined, Phone, Room, Twitter, YouTube } from "@material-ui/icons"
import styled from "styled-components"



const Container = styled.div`
height: 40vh;
display: flex;
background-color: lightskyblue;

`

const Left = styled.div`
flex: 1;
padding: 17px;
`

const Logo = styled.h1`
font-weight: 900px;
`

const Desc = styled.p`
margin-top: 20px;
font-weight: 900px;
`

const SocialContainer = styled.div`
display: flex;
margin-top: 10px;

`

const SocialIcons = styled.div`
margin-left: 9px;
cursor: pointer;
height: 40px;
width: 40px;
border-radius: 50%;
color: white;
background-color: #${(props) => props.color};
display: flex;
align-items: center;
justify-content: center;


`

const Center = styled.div`
flex: 1;
padding: 17px;
`
const Title = styled.h3``

const List = styled.ul`
padding: 0;
margin: 0;
list-style:none;
`

const ListItem = styled.li`
margin-top: 3px;
`

const Right = styled.div`
flex: 1;
padding: 17px;
`
const ContactIcons = styled.div`
margin-top: 20px;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo> Supershop. </Logo>
                <Desc> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.</Desc>
                <SocialContainer>
                    <SocialIcons color="3b5999"> <Facebook /> </SocialIcons>

                    <SocialIcons color="E4405f">  <Instagram />  </SocialIcons>

                    <SocialIcons color="55ACEf">  <Twitter />   </SocialIcons>

                    <SocialIcons color="E60023">  <YouTube />   </SocialIcons>

                </SocialContainer>

            </Left>

            <Center>
                <Title>Usefull Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>


                </List>

            </Center>

            <Right>
                <Title> Contact</Title>
                <ContactIcons> <Room /> BOR Society Johar Town Lahore </ContactIcons>
                <ContactIcons> <Phone />  +42 606-414465</ContactIcons>
                <ContactIcons> <MailOutlined /> info@supershop.com</ContactIcons>
            </Right>


        </Container>
    )
}

export default Footer