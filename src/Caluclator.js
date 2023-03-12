import React, { useState } from 'react'

const Caluclator = () => {
    const [changeValue, setChangeValue] = useState(0);
    const [addValue, setAddValue] = useState(0);
    const [chackClick, setChackClick] = useState('');

    const changeHandler = (e)=>{
        setChangeValue(e.target.value)
    }

    const plus = (e)=>{
        setChackClick('plus')
        setAddValue(parseInt(addValue) + parseInt(changeValue));
    }
    const minus = ()=>{
        setChackClick('minus')
        setAddValue(parseInt(addValue) - parseInt(changeValue));
    }
    const multiple = ()=>{
        setChackClick('multiple')
        setAddValue(parseInt(addValue) * parseInt(changeValue));
    }
    const divide = ()=>{
        setChackClick('divide')
        setAddValue(parseInt(addValue) / parseInt(changeValue));
    }

    const result = ()=>{
        if(chackClick === 'plus'){
            setAddValue(parseInt(changeValue) + parseInt(addValue) )
        }else if(chackClick === 'minus'){
            setAddValue(parseInt(addValue) > 0 ? parseInt(addValue) -  parseInt(changeValue): 0 )
        }
        else if(chackClick === 'multiple'){
            setAddValue(parseInt(changeValue) * parseInt(addValue) )
        }
        else if(chackClick === 'divide'){
            setAddValue(parseInt(changeValue) / parseInt(addValue) )
        }
        
        console.log('result');
    }


  return (
    <div>
        <input type="number" placeholder="Enter Number" onChange={changeHandler}/>

        <button style={{padding: "0rem 1rem",marginLeft: "1rem"}} onClick={plus}>+</button>
        <button style={{padding: "0rem 1rem",marginLeft: "1rem"}} onClick={minus}>-</button>
        <button style={{padding: "0rem 1rem",marginLeft: "1rem"}} onClick={multiple}>*</button>
        <button style={{padding: "0rem 1rem",marginLeft: "1rem"}} onClick={divide}>/</button>
        <button style={{padding: "0rem 1rem",marginLeft: "1rem"}} onClick={result}>Result</button>

        <div>{addValue}</div>
     
    </div>
  )
}

export default Caluclator
