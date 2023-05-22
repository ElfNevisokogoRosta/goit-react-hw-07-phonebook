import styled from "styled-components";
const Container = styled.div`
  margin-top: 30px;
  background-color: #1164B3;
  border-radius: 15px;
  padding-top: 30px;
  padding-bottom: 30px;
  margin-bottom: 30px;
`
const FilterContainer = styled.div`
`
const ContactContainer=styled.ul`
  display: flex;
  gap: 30px;
  flex-direction: column;
  list-style-type: none;
  margin: 0;
  margin-top: 30px;
  justify-content: center;
`
const Filter = styled.input`
  display: block;
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  font-size: 24px;
  padding: 10px 0px 10px 15px;
  background-color:#8DD9CD; 
  border: none;
  border-radius: 15px;
  transition: background-color, 250ms;
  color: #fff;
  &:focus{
    border: none;
    outline: none;
    background-color:#30BFBE;
    color: #fff;
  }
`
export {Container, Filter, ContactContainer, FilterContainer}