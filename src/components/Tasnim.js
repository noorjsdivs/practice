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
        let flag = 0;
        operators.forEach((item, i) => {
          if(flag==1){
            i--;
            flag = 0;
          }
          if(operators[i] == '*'){
            numbers[i] = numbers[i] * numbers[i+1]; 
            if(operators[i+1] == '*'){
              flag = 1;
            }
            operators.splice(i,1);
            numbers.splice(i+1,1);
          }
        });

        operators.forEach((item, i) => {
          if(flag==1){
            i--;
            flag = 0;
          }
          if(operators[i] == '/'){
            numbers[i] = numbers[i] / numbers[i+1]; 
            if(operators[i+1] == '/'){
              flag = 1;
            }
            operators.splice(i,1);
            numbers.splice(i+1,1);
          }
        });

        result = numbers[0];

        operators.forEach((item,index)=>{
            if(operators[index] == '+'){
              result = result + numbers[index+1];  
            }  
            else if(operators[index] == '-'){
              result = result - numbers[index+1];  
            }  
        })
    }

    else{
        parenthesis.forEach((element,x)=>{
            if(element == '('){
            parenthesisindex.forEach((element2,y)=>{
              let flag2 = 0;
              numbers.forEach((element3,z)=>{ 
                if(flag2==1){
                  z--;
                  flag2 = 0;
                }
                let result1 = numbers[z];
                if(z==element2+1){
                  if(operators[z] == '+'){
                    result1 = result1 + numbers[z+1]; 
                  }  
                  else if(operators[z] == '-'){
                    result1 = result1 - numbers[z+1];  
                  } 
                  else if(operators[z] == '*'){
                    result1 = result1 * numbers[z+1];  
                  } 
                  else if(operators[z] == '/'){
                    result1 = result1 / numbers[z+1];  
                  }
                  flag2 = 1;
                  numbers[z] = result1;
                  operators.splice(z,1);
                  numbers.splice(z+1,1);
                } 
              });
            });
            }
        });
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
