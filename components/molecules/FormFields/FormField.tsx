import React from 'react'
import { UseFormRegisterReturn } from 'react-hook-form';
import InputField from '@/components/atoms/Input/InputField';
import { InputValue } from '@/interfaces/InputValues';


function FormField({label,placeholder,register,error, onChange, value} : InputValue) {
  return (
    <>   
     <InputField key={label} label={label}  register={register} placeholder={placeholder} error={error} onChange={onChange} value={value}  />
    </>
  )
}

export default FormField