import React, {useState, useEffect, useCallback} from 'react'
import Header from './Header'
import '../css/tasnim.css'

const Tasnim = () => {

  let [number, setNumber] = useState("");
  let [numbers, setNumbers] = useState([]);
  let [operator, setOperator] = useState("");
  let [operators, setOperators] = useState([]);
  let [decimal, setDecimal] = useState("");
  let [parenthesis, setParenthesis] = useState([]);
  let [parenthesisindex, setParenthesisindex] = useState([]);
  let [inputs, setInputs] = useState([]);
  let [result, setResult] = useState(0);
  let [ans, setAns] = useState(0);
  

  let handleNumber = (e) => {
    setNumber(e.target.value);
    if(operators.length == numbers.length-1){
      const item = numbers[numbers.length-1];
      numbers.pop();
      if(decimal != ''){
        numbers.push(parseFloat(item + e.target.value));
      }else{
        numbers.push(item*10 + parseInt(e.target.value));
      }    
    }
    else{
      numbers.push(parseInt(e.target.value));
    }
    inputs.push(parseInt(e.target.value));
  }
  
  let handleOperator = (e) => {
    setOperator(e.target.value);
    operators.push(e.target.value);
    inputs.push(e.target.value);
  }

  let handleDecimal = (e) => {
    setDecimal(e.target.value);
    inputs.push(e.target.value);
    const item = numbers[numbers.length-1]+".";
    numbers[numbers.length-1] = item;
  }

  let handleParenthesis = (e) => {
    parenthesis.push(e.target.value);
    inputs.push(e.target.value);
    parenthesisindex.push(numbers.length-1);
  }

  useEffect(() => {
    setInputs((prev) => {
      const inputs_arr = [...prev];
      return inputs_arr;
    });
  }, [inputs]);


  let handleAns = () => {
        result = numbers[0];
        if(parenthesis == ''){
          numbers.forEach((item,index)=>{
              if(operators[index] == '+'){
                result = result + numbers[index+1];  
              }  
              else if(operators[index] == '-'){
                result = result - numbers[index+1];  
              } 
              else if(operators[index] == '*'){
                result = result * numbers[index+1];  
              } 
              else if(operators[index] == '/'){
                result = result / numbers[index+1];  
              }   
          })
        }
        else{
          parenthesis.forEach((element,x)=>{
            if(element == '('){
              parenthesisindex.forEach((element2,y)=>{
                numbers.forEach((element3,z)=>{
                  if(element2 == z-1 && element2 != z){
                    if(operators[z] == '+'){
                      result = result + numbers[z+1];  
                    }  
                    else if(operators[z] == '-'){
                      result = result - numbers[z+1];  
                    } 
                    else if(operators[z] == '*'){
                      result = result * numbers[z+1];  
                    } 
                    else if(operators[z] == '/'){
                      result = result / numbers[z+1];  
                    }
                    operators[z] = '+';
                    numbers[z+1] = 0;
                  } 
                });
                numbers[parenthesisindex[y]] = result;
            });
            }
          }); 
        }
        setAns(result);
  }

  let handleClear = () => {
    setNumbers([]);
    setOperators([]);
    setDecimal("");
    setParenthesis([]);
    setParenthesisindex([]);
    setInputs([]);
    setAns(0);
  }


  let handleDelete = useCallback(() => {
    setInputs((prev) => {
      const next = [...prev];
      if(next[next.length-1]==numbers[numbers.length-1]){
        setNumbers((prev_num)=>{
          const next_num = [...prev_num];
          return next_num;
        })
      }
      else if(next[next.length-1]==operators[operators.length-1]){
        setOperators((prev_op)=>{
          const next_op = [...prev_op];
          next_op.pop();
          return next_op;
        })
      }
      else if(next[next.length-1] == '.'){
        setDecimal("");
      }
      next.pop();
      return next;
    });
  }, [setInputs, setNumbers, setOperators]);
  

    


  return (
      <>
      <Header/>
      <h2> Calculator Program in ReactJS </h2>
        <form className='calculator'>
        
            <input type = "text" value={inputs.join('')} className="inputs"/>
            <br/>

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
            
            
            <input type = "button" value = "(" onClick={handleParenthesis}/>
            <input type = "button" value = "0" onClick={handleNumber}/>
            <input type = "button" value = ")" onClick={handleParenthesis}/> 
            <input type = "button" value = "/" onClick={handleOperator}/>
            <br/> 

            <input type = "button" value = "C" className="clear" onClick={handleClear}/>
            <input type = "button" value = "D" className="delete" onClick={handleDelete}/>
            <input type = "button" value = "." onClick={handleDecimal}/>
            <input type = "button" value = "=" onClick={handleAns}/>
            <br/>

            <input type = "text" value= {ans} className="ans" readOnly/> 
            <br/> 
  
        </form>

      </>
    
  )
}

export default Tasnim