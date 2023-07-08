import { EducationDefaultState } from '@/interfaces/education-default-state';
import React, { useState } from 'react';


const defaultState : EducationDefaultState  = {
    name : '',
    institutions : [],
    searchText: '',
    educationalHistory : []
}


const EducationalContext = React.createContext([])


export const EducationalProvider = ({children}: any) => {
    const [state,setState] = useState(defaultState)

    const updateState = (newState: EducationDefaultState) => setState({ ...state, ...newState})

    return (
        <EducationalContext.Provider value={{ state, updateState} as any}>
            {children}
        </EducationalContext.Provider>
    )
}


export default EducationalContext


