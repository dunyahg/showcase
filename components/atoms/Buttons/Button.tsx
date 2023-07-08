import React from 'react'
import styled from 'styled-components'


const CustomButton = styled.button`
 background : #CF3C3C;
 color : #FFF;
 padding: 0.6rem 2rem;
 letter-spacing: 0.6px;
 border: none;
 font-weight : 500;
 cursor : pointer;
 border-radius : 0.4rem;

`

type BtnFields = {
    btnType : any,
    text : string
}


function Button({btnType, text}:BtnFields) {
  return (
    <>
       <CustomButton type={btnType}>{text}</CustomButton>
    </>
  )
}

export default Button