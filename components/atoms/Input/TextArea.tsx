import React from 'react'
import { UseFormRegisterReturn } from 'react-hook-form';
import styled from 'styled-components'

type Props = {
 label : string;
 register : UseFormRegisterReturn;
 error : any;
}


const P = styled.p`
color : red;
`
const Textarea = styled.textarea`
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    color: #333;
    padding : 0.5rem;

    &:focus {
        outline: none;
        border-color: #ccc;
      }
`

const Div = styled.div`
    display : flex;
    flex-direction : column;
    gap : 0.6rem;
 `

function TextArea({label,register, error} : Props) {

  return (
    
    <Div>
        <label>{label}</label>
        <Textarea {...register} rows={5} ></Textarea>
        {error && <P>{error}</P>}
    </Div>
  )
}

export default TextArea