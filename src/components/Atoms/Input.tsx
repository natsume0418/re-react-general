
interface InputProps {
    type:string;
    value?:string;
    onChange:(e: React.ChangeEvent<HTMLInputElement>) => void;
    name?:string;
    accept?:string;
    className?:string;
}

const Input = ({type, value, onChange, name, accept}:InputProps) => {
    return (
        <input type={type} value={value} onChange={onChange} name={name} accept={accept} className="border border-black w-full mb-5"/>
    )
};

export default Input;