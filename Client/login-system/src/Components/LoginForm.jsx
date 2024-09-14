import React from 'react'
import styles from '../styles/loginForm.module.css'
import { useState } from 'react';

export default function LoginForm() {
  // let userValid = false;
  // states for password and user name
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  async function authenticateUser(event){
    const url = 'http://localhost:4023/authenticateUser/';

    event.preventDefault();
    // console.log(username, password);
    try{
      const response = await fetch(url, {method: 'POST', body: JSON.stringify({"username": username, "password": password}), headers: { 'Content-Type': 'application/json'}, mode: 'cors'});
      


      if(response.ok){
        const json = await response.json();
        console.log(json);        
      }

      


    }catch(error){
      console.log(error);
    }
  };
    


  return (
    <div className={`${styles.centreVerticallyAndHorizontally} ${styles.font} ${styles.formContainer}`}>

        <h2 className={styles.headingStyle}>Login</h2>
        {/* Login user form */}
        <form action="#" onSubmit={authenticateUser}>
            <input type="text" placeholder="Username" className={styles.formInputs} value={username} onChange={e => setUsername(e.target.value)}/>
            <br />
            <input type="password" placeholder="Password" className={styles.formInputs} value={password} onChange={e => {setPassword(e.target.value)}}/>
            <br />
            <input type="submit" value="Login" className={styles.loginButton} />
        </form>
    </div>
  )
}
