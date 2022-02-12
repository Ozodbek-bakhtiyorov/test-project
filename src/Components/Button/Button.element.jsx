import styled from "styled-components";
export const ButtonEl = styled.button`
  line-height: 25px;
  padding:.7rem 3rem;
  cursor:pointer;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 14.9144px;
  text-align: center;
  letter-spacing: -0.016em;
  text-transform: uppercase;
  color: #ffffff;
  background: #262628;
  border: 0.641953px solid #cfd0d7;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.15);
  border-radius: 1.28391px;
  border-radius:5px;
  transition: all .3s ease-in-out;
  opacity:.9;
  &:hover{
    transform:scale(1.05);
    opacity:1;
  }
  &:active{
    transform:translateY(2px)
  }
`;
