import React from 'react';
import { InputFieldEl } from './InputField.element';

const InputField = ({unique_id,label,type,placeholder,name, onchange,value}) => {
  return (
    <InputFieldEl>
      <label htmlFor='input'>{label}</label>
      <input 
        type={type} 
        placeholder={placeholder}
        id={unique_id}
        name={name}
        onChange={onchange}
        value={value}
      />
    </InputFieldEl>
  );
}

export default InputField;
