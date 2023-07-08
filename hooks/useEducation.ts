import { useContext } from "react";
import { EducationDefaultState } from "@/interfaces/education-default-state";
import EducationalContext from "@/context/EducationalContext";


export default () => useContext<{
    state : EducationDefaultState,
    updateState: (newState: EducationDefaultState) => void
}>(EducationalContext as any)