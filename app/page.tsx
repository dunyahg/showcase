'use client'
import Image from 'next/image'
import Form from '@/components/organisms/Forms/Form'
import styled from 'styled-components'
import useEducation from '@/hooks/useEducation'
import { useRouter } from 'next/navigation'


export default function Home() {


  const Div = styled.div`
   display : flex;
   flex-direction:column;
   align-items : center;
   justify-content : center;
   height : 96vh;
   gap : 6rem;
  `

  const router = useRouter()
  const education = useEducation()
  
  const handleFormSubmit = (data: any) => {
    console.log('Submitted:', data);
     education.updateState({
       name :  data.name
     })
    router.push('/dashboard')
  };


  return (
    <Div>
        <p>Hi there! Welcome to your education showcase</p>
        <Form onSubmit={handleFormSubmit}/>
    </Div>
  )
}
