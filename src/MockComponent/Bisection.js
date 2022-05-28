import React, {useState} from 'react'
import { round } from 'mathjs';
import bisection from '../Component/RootOfEquation/Module/Bisection';

export default function BisectionMockup() {
    const [value, setValue] = useState(0);
    const [equation, setEquation] = useState('');
    const [xl , setXL] = useState(0);
    const [xr , setXR] = useState(0);
    const onSubmit =()=> {
        const ans = bisection(equation,parseFloat(xl),parseFloat(xr));
        if(ans !== -1){
            setValue(round(bisection(equation,parseFloat(xl),parseFloat(xr)).x,6));
        }else{
            setValue(-1);
        }
    }
    return <div>
        <input value={equation} data-testid="equation" type="text" onChange={(e)=>{setEquation(e.target.value)}} />
        <input value={xl} data-testid="xl" type="number" onChange={(e)=>{setXL(parseFloat(e.target.value))}} />
        <input value={xr} data-testid="xr" type="number" onChange={(e)=>{setXR(parseFloat(e.target.value))}} />
        <button data-testid='submit' onClick={onSubmit}>submit</button>
        <input value={value} data-testid="x" type="number" uncontrolled="true" onChange={(e)=>{}} />
    </div> 
  }
