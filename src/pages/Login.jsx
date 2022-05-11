import styled from "styled-components"


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background:  url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;`

const Title = styled.h2`
font-weight: 500;
margin: 9px 5px;



`
const Form = styled.form`
background-color: white;
height: 40%;
width: 25%;
align-items: center;
justify-content: center;
padding: 15px;
margin: 8px 8px;

`

const Input = styled.input`
height: 8%;
width: 90%;
margin: 9px 5px; 
`

const Link = styled.div`
  margin: 8px 4px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  font-size: 13px;
`;

const Button = styled.button`
margin: 12px 5px;
background-color: teal;
width: 30%;
height: 13%;
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
                <Title>SIGN IN</Title>
                <Input type="text" placeholder="User Name" />
                <Input type="text" placeholder="Password" />
                <Button> LOGIN</Button>
                <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
                <Link>CREATE A NEW </Link>
            </Form>


        </Container>
    )
}

export default Register