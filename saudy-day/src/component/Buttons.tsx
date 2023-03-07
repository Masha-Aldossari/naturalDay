import React from 'react'
import { useNavigate } from "react-router-dom";


function Buttons() {
      const navigate = useNavigate();

      const LogIn =()=>{
            navigate('/welcome')
      }

  return (
    
      <div className='Button-container'>
         <div className='container'>
               <h3 className='text'>مالحد منة الله الي عزنا </h3>
         <div className='btn-div'>
               <button className='btn'>تسجيل جديد</button>
               <button className='btn' onClick={LogIn}> تسجيل دخول </button>
         </div>
         </div>
      </div>
   
  )
}

export default Buttons