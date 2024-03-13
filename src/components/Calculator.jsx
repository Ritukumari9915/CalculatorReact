import React, { useState } from 'react'

function Calculator() {
    const [inputValue, setInputValue] = useState('');

    function handleInput(value){
        setInputValue (preValue => preValue + value);
      console.log(inputValue);
       

    }
    const calculate = () => {
        const result = eval(inputValue);
        setInputValue(result.toString())

    }
    const allClear = ()=> {
        setInputValue('')
    }
  return (
    <>
      <div className="calculator">
        <input type="text"
        className='display'
        value={inputValue}
        onChange={(e)=> setInputValue(e.target.value)}
        />
        <div className="buttons">
            <button onClick={()=> handleInput('1')}>1</button>
            <button onClick={()=> handleInput('2')}>2</button>
            <button onClick={()=> handleInput('3')}>3</button>
            <button onClick={()=> handleInput('/')}>/</button>

            <button onClick={()=> handleInput('4')}>4</button>
            <button onClick={()=> handleInput('5')}>5</button>
            <button onClick={()=> handleInput('6')}>6</button>
            <button onClick={()=> handleInput('*')}>*</button>

            <button onClick={()=> handleInput('7')}>7</button>
            <button onClick={()=> handleInput('8')}>8</button>
            <button onClick={()=> handleInput('9')}>9</button>
            <button onClick={()=> handleInput('*')}>-</button>

            <button onClick={()=> handleInput('0')}>0</button>
            <button onClick={()=> handleInput('.')}>.</button>
            <button onClick={()=> handleInput('+')}>+</button>
            <button onClick={calculate}>=</button>
           <button onClick={allClear}>AC</button>
        </div>

      </div>
    </>
  )
}

export default Calculator
