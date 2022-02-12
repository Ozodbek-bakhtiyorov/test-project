import styled from "styled-components";
import { d_flex } from '../../Styles/mixins';

export const InputFieldEl = styled.div`
  max-width: 100%;
  min-width:300px;
  @media screen and (max-width:'420px'){
    min-width:220px;
  }
  input,select {
    ${d_flex('column',"flex-start","center")};
    height: 42px;
    background: #fcfcfd;
    border: 1.06532px solid #cfd0d7;
    border-radius: 2.13063px;
    font-size: 14.9144px;
    line-height: 21px;
    padding: 0.7rem 0.8rem;
    color: rgba(26, 32, 61, 0.3);
    width:100%;
   
  }
  label {
    display: block;
    padding:.3rem 0;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 14.9144px;
    line-height: 21px;
    color: #5f6377;
  }
`;
