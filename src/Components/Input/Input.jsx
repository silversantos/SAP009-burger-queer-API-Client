import styles from './Input.module.css';

export const Input = ({type, placeholder}) => {
    return (
        <input
            type={type} placeholder={placeholder}
            className={styles.inputs}
        />
    )
}

// export default Input;
