import React, {useState} from 'react'
import { round ,derivative } from 'mathjs';
import NR from '../Component/RootOfEquation/Module/NR';

export default function Newtonrapson() {
    const [value, setValue] = useState(0);
    const [equation, setEquation] = useState('');
    const [x , setX] = useState(0);
    const onSubmit =()=> {
        const ans = NR(equation,derivative(equation,'x').toString(),parseFloat(x));
        if(ans !== -1){
            setValue(round(ans.xn,6));
        }else{
            setValue(-1);
        }
    }
    return <div>
        <input value={equation} data-testid="equation" type="text" onChange={(e)=>{setEquation(e.target.value)}} />
        <input value={x} data-testid="xi" type="number" onChange={(e)=>{setX(parseFloat(e.target.value))}} />
        <button data-testid='submit' onClick={onSubmit}>submit</button>
        <input value={value} data-testid="x" type="number" uncontrolled="true" onChange={(e)=>{}} />
    </div> 
  }