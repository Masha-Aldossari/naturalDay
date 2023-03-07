import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";


function LogIn() {
const navigate = useNavigate();

const[name , setName] = React.useState<any>("")
const [password , setPassword] = React.useState<any>("")
  


const UserLogIn =()=>{
    if(name.length >=3 && password !=0){
        localStorage.setItem(password , name)
        localStorage.getItem(name)
        navigate('/Saudi')
    }else{
        console.log('====================================');
        console.log("err");
        console.log('====================================');
    }
}

  return (
<div className='input-container'>
    <fieldset>سجل دخولك 
<div className='logIn-information'>
<input className='input' placeholder='Firest Name' onChange={e=>{setName(e.target.value)}}></input>
<input className='input' placeholder='password' type="password"onChange={e=>{setPassword(e.target.value)}}></input>
<button onClick={UserLogIn}>تسجيل الدخول </button>
</div>
</fieldset>
</div>





  )
}

export default LogIn