import { LabelHTMLAttributes } from "react";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
    children: React.ReactNode;
};

const Label = ({children, ...props}:LabelProps) => {
    return(
        <label {...props}>{children}</label>
    );
};

export default Label;