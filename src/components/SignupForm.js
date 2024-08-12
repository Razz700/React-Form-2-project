import React, { useState } from 'react'
import '../App.css'
function SignupForm() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');
    const [emailValid,setEmailValid]=useState(false);
    const [passwordValid,setPasswordValid]=useState(false);
    const [confirmPasswordValid,setConfirmPasswordValid]=useState(false);

    const handleEmail=(e)=>{setEmail(e.target.value);
        const checkValue=e.target.value;
        if (/^[a-zA-Z0-9_]+@[a-zA-Z0-9]+[.][a-zA-Z0-9]+$/.test(checkValue)) {
            setEmailValid(true);
        }else{
            setEmailValid(false);
        }
    };
    const handlePassword=(e)=>{setPassword(e.target.value);
        const checkValue=e.target.value;
        if (/^.{8,}$/.test(checkValue)) {
            setPasswordValid(true);
        }else{
            setPasswordValid(false);
        }
        checkValue===confirmPassword?setConfirmPasswordValid(true):setConfirmPasswordValid(false);
    }
    const handleConfirmPassword=(e)=>{setConfirmPassword(e.target.value);
        if (password===e.target.value) {
            setConfirmPasswordValid(true);
        }else{
            setConfirmPasswordValid(false);
        }
    }
    

function handleSubmit(e){
e.preventDefault();
if (email!=='' && password!=='' && confirmPassword!=='' && emailValid && passwordValid && confirmPasswordValid) {
    alert("Form submitted successfully");
    setEmail('');
    setConfirmPassword('');
    setPassword('');
}else{
    alert("Can't submit the form");
}
}
  return (
    <form>
        <label className='label' htmlFor='email'>Email:</label><br/>
        <input className={emailValid?'valid':'not-valid'} value={email} onChange={handleEmail} type='email' id='email' placeholder='Email'/><br/>
       {!emailValid && <p className='input-errors'>Invalid email format</p>}
        
        <label className='label' htmlFor='password'>Password:</label><br/>
        <input className={passwordValid?'valid':'not-valid'} value={password} onChange={handlePassword} type='password' id='password' placeholder='Password'/><br/>
        {!passwordValid && <p className='input-errors'>Password must be atleast 8 characters</p>}
        
        <label className='label' htmlFor='confirm-password'>Confirm Password:</label><br/>
        <input className={confirmPasswordValid?'valid':'not-valid'} value={confirmPassword} onChange={handleConfirmPassword} type='password' id='confirm-password' placeholder='Confirm Password'/><br/>
        {!confirmPasswordValid && <p className='input-errors'>Passwords do not match</p>}
       
        <button onClick={handleSubmit} className='btn'>Sign Up</button>
    </form>
  )
}

export default SignupForm