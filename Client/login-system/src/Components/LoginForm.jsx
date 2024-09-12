import React from 'react'
import styles from '../styles/loginForm.module.css'
import { useState } from 'react';

export default function LoginForm() {
    // states for password and user name
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


  return (
    <div className={`${styles.centreVerticallyAndHorizontally} ${styles.font} ${styles.formContainer}`}>

        <h2 className={styles.headingStyle}>Login</h2>
        {/* Login user form */}
        <form action="">
            <input type="text" placeholder="Username" className={styles.formInputs} value={username} onChange={e => setUsername(e.target.value)}/>
            <br />
            <input type="password" placeholder="Password" className={styles.formInputs} value={password} onChange={e => {setPassword(e.target.value)}}/>
            <br />
            <input type="submit" value="Login" className={styles.loginButton} />
        </form>
    </div>
  )
}
