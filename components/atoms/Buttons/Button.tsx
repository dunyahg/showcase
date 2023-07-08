import React from 'react'
import styled from 'styled-components'


const CustomButton = styled.button`
 background : #C4C4C4;
 color : #030303;
 padding: 0.6rem 2rem;
 letter-spacing: 0.6px;
 border: none;
 font-weight : 500;
 cursor : pointer;
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