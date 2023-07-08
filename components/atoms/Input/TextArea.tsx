import React from 'react'
import { UseFormRegisterReturn } from 'react-hook-form';
import styled from 'styled-components'

type Props = {
 label : string;
 register : UseFormRegisterReturn;
 error : any;
}

function TextArea({label,register, error} : Props) {


    const P = styled.p`
    color : red;
    `

    const Div = styled.div`
        display : flex;
        flex-direction : column;
        gap : 0.6rem;
     `

  return (
    
    <Div>
        <label>{label}</label>
        <textarea {...register} rows={5} ></textarea>
        {error && <P>{error}</P>}
    </Div>
  )
}

export default TextArea