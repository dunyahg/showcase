import React, { ChangeEvent, useEffect, useState } from 'react'
import FormField from '@/components/molecules/FormFields/FormField'
import { useForm } from 'react-hook-form';
import Button from '@/components/atoms/Buttons/Button';
import styled from 'styled-components'
import SelectField from '@/components/molecules/Select/SelectField';
import TextArea from '@/components/atoms/Input/TextArea';
import institutionService from '@/services/institution.service';
import {useQuery} from '@tanstack/react-query'
import useEducation from '@/hooks/useEducation'
import { useDebounce } from 'use-debounce';
import { Institution } from '@/interfaces/Institution';

interface FormProps {
    onSubmit: (data: any) => void;
}

const FormGroup = styled.div`
margin-bottom : 1rem;
`
const Row = styled.div`
 display : flex;
 gap : 1rem;
 align-items : start;
 width : 100%;
`
const DivHalf = styled.div`
 width : 50%;
`
const ButtonLeft = styled.div`
float : right;
`

const List = styled.div`
 padding : 0.4rem 0;
 background : #EEE;
 padding-left: 0.6rem;
 cursor : pointer;
`


function ModalForm({onSubmit} : FormProps) {



    const { handleSubmit, register, formState: { errors }, watch, } = useForm();

    const months = [
        {value: "January", name:"January"},
        {value: "February", name:"February"},
        {value: "March", name:"March"},
        {value: "April", name:"April"},
        {value: "May", name:"May"},
        {value: "June", name:"June"},
        {value: "July", name:"July"},
        {value: "August", name:"August"},
        {value: "September", name:"September"},
        {value: "October", name:"October"},
        {value: "November", name:"November"},
        {value: "December", name:"December"},
    ]

    const education = useEducation()

    const [inputValue, setInputValue] = useState('');

    const { data } = useQuery(['institutions', inputValue], () => {
        return  institutionService.getInstitutions({ name: inputValue, country:'' })
      })

      const [searchValue] = useDebounce(inputValue, 3000);
    // console.log("Search result : ", searchValue)
      
      useEffect(() => {
      
        if(data) {
         console.log("Modal : ", data)
          console.log(data, inputValue)
      
          education.updateState({
            institutions:  data,
            
          })
        }
      }, [data])

     
      const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        //console.log("Search value ",inputValue)
      };

    //   {education.state.institutions && education.state.institutions.splice(0, 10).map((data:Institution, index : number) => (
    //     <li key={index}>{data.name}</li>
    //  ))}
    

    const [month , setMonth] = useState<any>(months)

    const handleFormSubmit = (data: any) => {
      onSubmit(data);
    };

    const getNextYears = () => {
        const currentYear = new Date().getFullYear();
        const years = [];
      
        for (let i = 0; i < 15; i++) {
          years.push({value: currentYear - i , name : currentYear - i});
        }
        return years;
      };

      const SelectIntitution = () => {
           console.log("data")
      }

      const startYear = watch('startYear');
      const endYear = watch('endYear');
      const validateYear = () => {
        if (startYear && endYear && startYear > endYear) {
            return 'Start year cannot be greater than end year';
          }
          return true;
      };

      const [year, setYear] =useState<any>(getNextYears)

  return (

        <form onSubmit={handleSubmit(handleFormSubmit)}>
            <div >
                <FormGroup>
                     <FormField placeholder='Name of school' value={inputValue} onChange={handleInputChange} label='Name of School' register={register('school', { required: 'School name is required' })} error={errors.school?.message} />   
                      <div>
                      {education.state.institutions && education.state.institutions.splice(0, 10).map((data:Institution, index : number) => (
                            <List onClick={SelectIntitution} key={index}>{data.name}</List>
                        ))}
                      </div> 
                </FormGroup>
                <FormGroup>
                  <Row>
                     <DivHalf>
                         <FormField placeholder='Degree' label='Degree' register={register('degree', { required: 'Degree is required' })} error={errors.degree?.message} />  
                     </DivHalf>
                     <DivHalf>
                        <FormField placeholder='Field of study' label='Field of study' register={register('study', { required: 'Field of study is required' })} error={errors.study?.message} />
                     </DivHalf>
                  </Row>
                </FormGroup>

                <FormGroup>
                  <Row>
                     <DivHalf>
                        <Row>
                            <DivHalf>
                              <SelectField label='Start month' register={register('startMonth', { required: 'Start month is required' })} error={errors.startMonth?.message}  options={month}/>
                            </DivHalf>
                            <DivHalf>
                              <SelectField label='Start year' register={register('startYear', { required: 'Year is required' })} error={errors.startYear?.message}  options={year}/>
                            </DivHalf>
                        </Row>
                     </DivHalf>
                     <DivHalf>
                       <Row>
                            <DivHalf>
                            <SelectField label='End month' register={register('endMonth', { required: 'End month is required' })} error={errors.endMonth?.message}  options={month}/>
                            </DivHalf>
                            <DivHalf>
                            <SelectField label='End year' register={register('endYear', { required: 'End year is required', validate: validateYear })} error={errors.endYear?.message}  options={year}/>
                            </DivHalf>
                        </Row>
                     </DivHalf>
                  </Row>
                </FormGroup>
                 <FormGroup>
                      <TextArea label='Description'  register={register('description', { required: 'Description is required' })} error={errors.description?.message} />
                 </FormGroup>
                <ButtonLeft>
                <Button btnType='submit' text='Save' />
                </ButtonLeft>
            </div>
        </form>

  )
}

export default ModalForm