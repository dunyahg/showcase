'use client'
import React,{useState,useEffect} from 'react'
import SidebarMenuItem from '@/components/molecules/Sidebar/SidebarMenuItem'
import useEducation from '@/hooks/useEducation'
import { Institution } from '@/interfaces/Institution'


function Sidebar() {

    const education = useEducation()

  return (
    <div>
    
        <h4>Showcase University</h4>
        {education.state.educationalHistory && education.state.educationalHistory.map((data:any, index : number) => (
            <div key={index}>
                <p>{data.school}</p>   
            </div>
        ))}
    </div>
  )
}

export default Sidebar