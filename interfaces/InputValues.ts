import { ChangeEvent, FocusEventHandler } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export interface InputValue {
    label : string,
    placeholder : string,
    register : UseFormRegisterReturn,
    error : any,
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    onBlur?: () => void;
    value? : string;
}
