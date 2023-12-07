export default function Button({label, action, type, className, ...props}){
    return(
        <button className={className} onClick={action} type={type} {...props}>
            {label}
        </button>
    )
}