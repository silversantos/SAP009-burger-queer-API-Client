// components
import { Input } from '../Input/Input.jsx'
import { SubmitBtn } from '../SubmitButton/SubmitButton.jsx';
//  styles
import styles from './Form.module.css'

export const Form = () => {
    return (
        <>
             <form action="" className={styles.form_login}>
                <h1 className={styles.login_title}>LOGIN</h1>
                <Input type="text" placeholder="email"/>
                <Input type="password" placeholder="password"/>
                
                <SubmitBtn text="login" />
            </form>
        </>
       
    )
}

// export default Form;

{/* <>
    <Header />
    <div>
        <img src="" alt="" />
        <Form />
    </div>
    
</> */}
