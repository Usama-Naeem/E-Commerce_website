import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Product from "../components/Product"
import Footer from "../components/Footer"



const Container = styled.div``

const Wrapper = styled.div`
padding: 20px;


`

const Filter = styled.div`
  display: flex;
justify-content: space-between;
align-items: center;

`

const Title = styled.h2`
font-weight: 400;

`
const FilterColor = styled.div`
display: flex;

margin: 25px 0px;

`

const FilterTitle = styled.div`
font-weight: 550;
margin-right: 8px;
`

const Select = styled.select`
margin-right: 8px;
`

const Option = styled.option``

const SortContainer = styled.div`
display: flex;
margin-right: 25px;
`


const Filters = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
        <Title> Dresses</Title>
        <Filter>
          <FilterColor>
            <FilterTitle>Filter Products:</FilterTitle>
            <Select>
              <Option> Yellow</Option>
              <Option> Blue</Option>
              <Option> Pink</Option>
              <Option> Green</Option>

            </Select>


            <Select>
              <Option> M</Option>
              <Option> L</Option>
              <Option> XL</Option>
              <Option> XXL</Option>

            </Select>

          </FilterColor>

          <SortContainer>
            <FilterTitle>Sort Products:</FilterTitle>
            <Select>
              <Option> Newest</Option>
              <Option> Price (asc)</Option>
              <Option> Price (desc)</Option>

            </Select>


          </SortContainer>
        </Filter>
        <Product/>
        <Footer/>
      </Wrapper>

    </Container>
  )
}

export default Filters