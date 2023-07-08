'use client'
import React, {useEffect, useState} from 'react'
import useEducation from '@/hooks/useEducation'
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/organisms/Sidebar/Sidebar';
import styled from 'styled-components'
// import Button from '@/components/atoms/Buttons/Button';
import Modal from 'react-modal';
import ModalForm from '@/components/organisms/Forms/ModalForm';
import Card from '@/components/atoms/Cards/Card';

// Modal.setAppElement('#__next');

const TopbarContent = styled.div`
    display : flex;
    align-items : center;
    justify-content : space-between;
    background : #fff;
    padding : 1rem 2rem;
    margin-bottom : 2rem;
   `
   
   const MainDiv = styled.div`
     display : flex;
     justify-content : space-between;
   `
   
   
   const SidebarContent = styled.div`
    background : #C93A3A;
    padding : 0.8rem 1.2rem;
    height : 96vh;
    width : 15%;
   `
   
   const MainContent = styled.div`
   background : #F0F0F0;
   width : 100%;
   `
   
   const ModalHeader = styled.div`
    display : flex;
    align-items : start;
    justify-content: space-between;
   `
   const Button = styled.button`
   background : #C93A3A;
   color : #fff;
   padding: 0.6rem 2rem;
   letter-spacing: 0.6px;
   border: none;
   font-weight : 500;
   border-radius : 0.2rem;
   `

   const SubTopbar = styled.div`
     background : #fff;
     padding : 1rem;
     margin: 1rem;
   `

   const A = styled.a`
    text-decoration : none;
    color : #000;
    cursor : pointer;
   `
   
   const customStyles = {
       content: {
         top: '50%',
         left: '50%',
         right: 'auto',
         bottom: 'auto',
         marginRight: '-50%',
         transform: 'translate(-50%, -50%)',
         width : '45%',
       },
     };

     const Overlay = styled.div.attrs(() => ({
      className: 'overlay-styles'
    }))`
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 9999;
    `;

    const CardDiv = styled.div`
      display: grid;
      grid-template-columns: repeat(3,1fr);
      gap: 0.4rem;
      `

//F0F0F0

const Dashboard = () => {

    const router = useRouter()

    const [modalIsOpen, setIsOpen] = React.useState(false);

    

   let education = useEducation();

 
   
  useEffect(() => {
    if(!education.state.name) {
      router.push('/')
    } 

  }, [education.state.name])


  const openModal = () => { 
    setIsOpen(true);
}
let subtitle : any;
const afterOpenModal = () => {
    subtitle.style.color = '#000';
}


const closeModal = () => {
    setIsOpen(false);
}

const LogoutEvent = () => {
    router.push('/')
}

const SubmitEducationalInfo = (data : any) => {
    console.log(data)
    
    education.updateState({
      educationalHistory :  [...education.state.educationalHistory as any, data]
    })
    //  console.log("educational update : ", education.state)
    setIsOpen(false);
}

  return (
    <MainDiv>
       
            <SidebarContent>
                <Sidebar />
            </SidebarContent>
            <MainContent>
                <TopbarContent>
                  <p> Welcome to {education?.state?.name}&apos;s education page</p>
                  <A onClick={LogoutEvent}> Logout</A>
               </TopbarContent>
                 <SubTopbar>
                       <Button onClick={openModal}> Add new education</Button>
                 </SubTopbar>
                  <CardDiv>
                  {education.state.educationalHistory && education.state.educationalHistory.map((data:any, index : number) => (
                    <Card key={index} degree={data.degree} study={data.study} school={data.school} startMonth={data.startMonth} startYear={data.startYear} endMonth={data.endMonth} endYear={data.endYear} description={data.description} />
                  ))}
                  </CardDiv>
               
              
            </MainContent>

        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          ariaHideApp={true}
          contentLabel="Educational form"
          overlayClassName="overlay-styles"
        >
            <ModalHeader>
                <h3 ref={(_subtitle) => (subtitle = _subtitle)}>New educational Modal</h3>
                <A href='#' onClick={closeModal}>x</A>
            </ModalHeader>
                {/* <div>I am a modal</div> */}
                <ModalForm onSubmit={SubmitEducationalInfo} />
      </Modal>
    </MainDiv>
  )
}
export default Dashboard