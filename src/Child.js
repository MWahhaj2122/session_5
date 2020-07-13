import React, { useContext } from 'react';
import CounterContext from './CounterContext' 
const Child = ()=> {
    let counterValue = useContext(CounterContext);

    return(<div>
    <h1>Using Context Counter</h1>
    <h2> The value of Counter is: {counterValue[0]}</h2> 
    <button onClick = {()=> 
    {counterValue[1](++counterValue[0])}  
    
    } >

        Increment value   
    </button>
    </div>
    )
}
export default Child;