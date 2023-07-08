'use client'
import React,{useState,useEffect} from 'react'
import SidebarMenuItem from '@/components/molecules/Sidebar/SidebarMenuItem'
import useEducation from '@/hooks/useEducation'
import { Institution } from '@/interfaces/Institution'
import styled from 'styled-components';


const HeaderFour = styled.h4`
 color : #fff;
 padding-bottom : 1rem;
 padding-top:2rem;
`

const Para = styled.p`
color : #fff;
font-size : 0.9rem;
padding-bottom:1.2rem;
`

function Sidebar() {

    const education = useEducation()

  return (
    <div>
    
        <HeaderFour>Showcase University</HeaderFour>
        {education.state.educationalHistory && education.state.educationalHistory.map((data:any, index : number) => (
            <div key={index}>
                <Para>{data.school}</Para>   
            </div>
        ))}
    </div>
  )
}

export default Sidebar