import Label from "../Atoms/Label";
import Input from "../Atoms/Input";

interface InputFieldProps {
    name?:string;
    label:string;
    type:string;
    value?:string;
    onChange:(e: React.ChangeEvent<HTMLInputElement>) => void;
    accept?:string;
    className?:string;
};

const InputField = ({name, label, type, value, onChange, accept, className}:InputFieldProps) => {
    return(
        <div>
            <Label children={label}></Label>
            <Input name={name} type={type} value={value} onChange={onChange} accept={accept} className={className}/>
        </div>
    )
};

export default InputField;