interface IconProps {
    src:string;
    className:string;
};

const Icon = ({src, className}:IconProps) => {
return(
    <div>
        <img src={src} className={className} alt="Icon" />
    </div>
)
};

export default Icon;