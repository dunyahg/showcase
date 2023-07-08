import React from 'react'
import styled from 'styled-components'


const CardDiv = styled.div`
  padding : 2rem;
  background : #fff;
  margin:1rem;
  border-radius :0.4rem;
  display : flex;
  flex-direction : column;
  gap: 1rem;
`

function Card({school,degree,startMonth, startYear,endMonth,endYear, study, description} : CardValues) {
  return (

        <CardDiv>
          <h5>{degree} {study} @ {school}</h5>
          <p>{startMonth} {startYear} - {endMonth} {endYear}</p>
          <p>{description}</p>
        </CardDiv>
  )
}

export default Card