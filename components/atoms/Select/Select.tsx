import React, { ChangeEvent } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form';
import styled from 'styled-components'


type Option = {
    value: string;
    name: string;
  };

  type SelectProps = {
    options: Option[];
    label : string;
    register : UseFormRegisterReturn,
    error : any
  };

function Select({ options,label, register, error } : SelectProps ) {

 const P = styled.p`
 color : red;
 `

 const Select = styled.select`
 padding : 0.6rem 0.8rem;
 width : 100%;
 `

 const Div = styled.div`
 display : flex;
 flex-direction : column;
 gap : 0.6rem;
 `

  return (
    <Div>
    <label>{label}</label>
     <Select  {...register}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </Select>
    {error && <P>{error}</P>}
    </Div>
  )
}

export default Select