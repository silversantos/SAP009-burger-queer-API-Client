import styles from './SubmitButton.module.css'

export const SubmitBtn = ({text}) => {
    return (
        <button type="submit" className={styles.submit_btn}>{text}</button>
    )
}

// export default SubmitBtn;
