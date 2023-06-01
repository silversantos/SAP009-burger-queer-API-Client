import styles from './SubmitButton.module.css'

export const Button = ({text, type, alt, value, className}) => {
    return (
        <button 
            type={type} 
            alt={alt} 
            value={value} 
            className={className}
        >{text}</button>
    )
}

// export default SubmitBtn;
