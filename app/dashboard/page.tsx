'use client'
import React, {useEffect, useState} from 'react'
import useEducation from '@/hooks/useEducation'
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/organisms/Sidebar/Sidebar';
import styled from 'styled-components'
// import Button from '@/components/atoms/Buttons/Button';
import Modal from 'react-modal';
import ModalForm from '@/components/organisms/Forms/ModalForm';

// Modal.setAppElement('#__next');

const HeaderDiv = styled.div`
    display : flex;
    align-items : center;
    flex-direction : column;
    margin-bottom : 3rem;
   `
   
   const MainDiv = styled.div`
     margin : 4rem;
   `
   
   const ContentDiv = styled.div`
    display : flex;
    gap:3rem
   `
   
   const FirstContent = styled.div`
    background : #C4C4C4;
    padding : 0.8rem 1.2rem;
    height : 50vh;
   `
   
   const LastContent = styled.div`
   background : #C4C4C4;
   width : 60%;
   padding : 0.8rem 1.2rem;
   `
   
   const ModalHeader = styled.div`
    display : flex;
    align-items : start;
    justify-content: space-between;
   `
   const Button = styled.button`
   background : #C4C4C4;
   color : #030303;
   padding: 0.6rem 2rem;
   letter-spacing: 0.6px;
   border: none;
   font-weight : 500;
   `

   const A = styled.a`
    text-decoration : none;
    color : #000;
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
        <HeaderDiv>
            <p> Welcome to {education?.state?.name}'s education page</p>
             {/* <Button text='Add new education' btnType='submit' /> */}
             <Button onClick={openModal}> Add new education</Button>
        </HeaderDiv>
        <ContentDiv>
            <FirstContent>
                <Sidebar />
            </FirstContent>
            <LastContent>
                
                  {education.state.educationalHistory && education.state.educationalHistory.map((data:any, index : number) => (
                     <div key={index}>
                         <h5>{data.degree} {data.study} @ {data.school}</h5>
                         <p>{data.startMonth} {data.startYear} - {data.endMonth} {data.endYear}</p>
                          <li>{data.description}</li>   
                     </div>
                  ))}
              
            </LastContent>
        </ContentDiv>

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