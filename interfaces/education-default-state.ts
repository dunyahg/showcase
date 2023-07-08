import { Institution } from "./Institution";

export interface EducationDefaultState {
    name? : string;
    institutions? : Institution[];
    educationalHistory? : any;
    searchText?: string;
    searchValue?: string;
}