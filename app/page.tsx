'use client'
import Image from 'next/image'
import Form from '@/components/organisms/Forms/Form'
import styled from 'styled-components'
import useEducation from '@/hooks/useEducation'
import { useRouter } from 'next/navigation'


  const Div = styled.div`
    display : flex;
    align-items : center;
    justify-content : center;
    height : 100vh;
    background : #C93A3A;
  `
  
  const LoginContent = styled.div`
      background : #fff;
      border-radius: 0.375rem;
      padding-left : 1.5rem;
      padding-right : 1.5rem;
      height: 50%;
      display:flex;
      align-items : center;
      justify-content : center;
      flex-direction:column;
      margin-left:1.5rem;
      margin-right:1.5rem;
      gap:2rem;
  `


export default function Home() {



  const router = useRouter()
  const education = useEducation()
  
  const handleFormSubmit = (data: any) => {
     education.updateState({
       name :  data.name
     })
    router.push('/dashboard')
  };


  return (
    <Div>
      <LoginContent>
        <p>Hi there! Welcome to your education showcase</p>
        <Form onSubmit={handleFormSubmit}/>
      </LoginContent>
    
    </Div>
  )
}
