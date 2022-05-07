import React,{useState, useEffect} from 'react'
import Header from './Header'
import '../css/tasnim.css'

const Tasnim = () => {

  

  return (
      <>
      <Header/>
      <h2> Calculator Program in ReactJS </h2>
        <form className='calculator'>
        
            <input type = "button" value = "1" />
            <input type = "button" value = "2" />
            <input type = "button" value = "3" />
            <input type = "button" value = "+" />
            <br/> 
            
            <input type = "button" value = "4" />
            <input type = "button" value = "5" />
            <input type = "button" value = "6" />
            <input type = "button" value = "-" />
            <br/> 
            
            <input type = "button" value = "7" />
            <input type = "button" value = "8" />
            <input type = "button" value = "9" />
            <input type = "button" value = "*" />
            <br/> 
            
            
            <input type = "button" value = "/" />
            <input type = "button" value = "0" />
            <input type = "button" value = "." /> 
            <input type = "button" value = "=" />
            <br/> 

            <input type = "button" value = "C" className="clear"/>
            <input type = "text" name = "ans" readOnly/> 
            <br/> 
  
        </form>

      </>
    
  )
}

export default Tasnim