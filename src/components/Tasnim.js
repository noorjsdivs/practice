import React, {useState, useEffect} from 'react'
import Header from './Header'
import '../css/tasnim.css'

const Tasnim = () => {

  let [number, setNumber]  = useState("");
  let [numbers, setNumbers] = useState([]);
  let [operator, setOperator] = useState("");
  let [operators, setOperators] = useState([]);
  let [sum, setSum] = useState("");
  let [ans, setAns] = useState(0);
  



  let handleNumber = (e) => {
    setNumber(e.target.value);
    numbers.push(parseInt(e.target.value));
  }
  
  let handleOperator = (e) => {
    setOperator(e.target.value);
    operators.push(e.target.value);
  }
  let handleAns = () => {
        sum = numbers[0];
        numbers.forEach((item,index)=>{
            if(operators[index] == '+'){
                
                sum = sum + numbers[index+1];
                
            }    
        }
        )
        setAns(sum);
    }




  return (
      <>
      <Header/>
      <h2> Calculator Program in ReactJS </h2>
        <form className='calculator'>
        
            <input type = "button" value = "1" onClick={handleNumber}/>
            <input type = "button" value = "2" onClick={handleNumber}/>
            <input type = "button" value = "3" onClick={handleNumber}/>
            <input type = "button" value = "+" onClick={handleOperator}/>
            <br/> 
            
            <input type = "button" value = "4" onClick={handleNumber}/>
            <input type = "button" value = "5" onClick={handleNumber}/>
            <input type = "button" value = "6" onClick={handleNumber}/>
            <input type = "button" value = "-" onClick={handleOperator}/>
            <br/> 
            
            <input type = "button" value = "7" onClick={handleNumber}/>
            <input type = "button" value = "8" onClick={handleNumber}/>
            <input type = "button" value = "9" onClick={handleNumber}/>
            <input type = "button" value = "*" onClick={handleOperator}/>
            <br/> 
            
            
            <input type = "button" value = "/" onClick={handleOperator}/>
            <input type = "button" value = "0" onClick={handleNumber}/>
            <input type = "button" value = "." /> 
            <input type = "button" value = "=" onClick={handleAns}/>
            <br/> 

            <input type = "button" value = "C" className="clear"/>
            <input type = "text" value= {ans} readOnly/> 
            <br/> 
  
        </form>

      </>
    
  )
}

export default Tasnim