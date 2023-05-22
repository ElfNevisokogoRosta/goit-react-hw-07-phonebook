import styled from "styled-components";
const Container = styled.div`
  width: 600px;
  margin-left: auto;
  margin-right: auto;
  padding: 0px 15px;
`
const Btn =styled.button`
  display: block;
  width: 240px;
  margin-left: auto;
  margin-right: auto;
  background-color: #534b7c;
  padding: 15px 30px;
  border: none;
  border-radius: 10px;
  font-size: 24px;
  color: #fff;
  cursor: pointer;
  transition: background-color, 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover{
    background-color:#ce3c15;
  }
`
const Title = styled.h1`
  display: block;
  margin: 0;
  padding: 0;
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  text-align: center;
  color: #1164B3;
  text-transform: uppercase;
`
export {Btn, Container, Title}