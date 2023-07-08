import { ChangeEvent } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export interface InputValue {
    label : string,
    placeholder : string,
    register : UseFormRegisterReturn,
    error : any,
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    value? : string;
}
