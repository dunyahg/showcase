import React from 'react'
import { UseFormRegisterReturn } from 'react-hook-form';
import Select from '@/components/atoms/Select/Select';


type Option = {
  value: string;
  name: string;
};

interface selectFieldsProps {
  options: Option[];
  label : string;
  register : UseFormRegisterReturn,
  error : any
}

function SelectField({label,register, options, error} : selectFieldsProps) {
  return (
    <>
      <Select label={label} register={register}  options={options} error={error}/>
      
    </>
  )
}

export default SelectField