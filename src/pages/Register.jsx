import styled from "styled-components"


const Container=styled.div`
height: 100vh;
width: 100vw;
background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Title=styled.h3`
margin-bottom: 10px;
font-weight: 100;



`
const Form=styled.form`
background-color: white;
height: 45%;
width: 40%;
align-items: center;
justify-content: center;
padding: 15px;
margin: 8px 8px;

`

const Input=styled.input`
height: 8%;
width: 44%;
margin: 7px 5px; 
`

const Agreement=styled.p`
margin: 7px 5px;
font-size: 15px;

`

const Button=styled.button`
margin: 12px 5px;
background-color: teal;
width: 20%;
height: 10%;
align-items: center;
justify-content: center;
border: none;
cursor: pointer;
color: white;
font-size: 15px;
`


const Register = () => {
  return (
    <Container>

<Form>
<Title>CREATE AN ACCOUNT</Title>
<Input type="text" placeholder="First Name"/>
<Input type="text" placeholder="Last Name"/>
<Input type="text" placeholder="User Name"/>
<Input type="text" placeholder="E-mail"/>
<Input type="text" placeholder="Password"/>
<Input type="text" placeholder="Confirm Password"/>
<Agreement> <b/>By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY </b></Agreement>
<Button> CREATE</Button>
</Form>

    </Container>
  )
}

export default Register