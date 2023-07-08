import React from 'react'
import FormField from '@/components/molecules/FormFields/FormField'
import { useForm } from 'react-hook-form';
import Button from '@/components/atoms/Buttons/Button';
import styled from 'styled-components'

interface FormProps {
    onSubmit: (data: any) => void;
  }

function Form({onSubmit} : FormProps) {

    const { handleSubmit, register, formState: { errors } } = useForm();

    const handleFormSubmit = (data: any) => {
      onSubmit(data);
    };


    const Div = styled.div`
      display:flex;
      flex-direction:column;
      align-items : center;
      justify-content : center;
      gap : 1.5rem;
    `

  return (
    <>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
            <Div>
              <FormField placeholder='Your name' label='Type your name and click "Enter" below' register={register('name', { required: 'Name is required' })} error={errors.name?.message} />
              <Button btnType='text' text='Enter' />
            </Div>
        </form>
    </>
  )
}

export default Form