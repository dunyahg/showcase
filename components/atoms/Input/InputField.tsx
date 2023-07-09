import { InputValue } from '@/interfaces/InputValues';
import React, { ChangeEvent } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form';
import styled from 'styled-components';
import useEducation from '@/hooks/useEducation'


const Div = styled.div`
 display : flex;
 flex-direction : column;
 gap : 0.6rem;
`

const Input = styled.input`
 padding : 0.6rem 0.8rem;
 border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  color: #333;

  &:focus {
    outline: none;
    border-color: #ccc;
  }
`

// box-shadow : 0 2px 4px rgba(0, 0, 0, 0.2);

const P = styled.p`
 color : red;
 margin-top : -0.2rem;
`

function InputField({label,placeholder,register,error, onChange, value} : InputValue) {

  let education = useEducation();


  return (
    <>
      <Div>
        <label> {label}</label>
        <Input key={label} placeholder={placeholder} {...register} value={value} onChange={onChange} 
          />
          {error && <P>{error}</P>}
    </Div>
    </>

  )
}

export default InputField