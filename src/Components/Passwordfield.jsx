import React from 'react';
import styled from 'styled-components';
import { d_flex } from './../Styles/mixins';
const PasswordField = ({unique_id,label,placeholder,name,onchange,value}) => {
  return (
    <PasswordFieldEl>
      <label htmlFor='input'>{label}</label>
      <input 
        type='password' 
        placeholder={placeholder}
        id={unique_id}
        name={name}
        onChange={onchange}
        value={value}
      />
    </PasswordFieldEl>
  );
}
export default PasswordField;
const PasswordFieldEl = styled.div`
 max-width: 100%;
  min-width:300px;
  input {
    ${d_flex('column',"flex-start","center")};
    height: 45px;
    background: #fcfcfd;
    border: 1.06532px solid #cfd0d7;
    border-radius: 2.13063px;
    font-size: 14.9144px;
    line-height: 21px;
    padding: 0.8rem 0.9rem;
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
`
