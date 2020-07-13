import React, { useReducer } from 'react';
import CounterReducer from './CounterReducer';
import Child from './Child';
const Child2 = ()=> {
    let [state,dispatch] = useReducer(CounterReducer, 1);
    console.log(state)
    return(
        <div>
            <h1>Using Reducer Counter</h1>
            <h2> The value of Counter is: {state}</h2>
            <button onClick = {
                ()=> {dispatch('INCREMENT')}

            } >

            Increment value

            </button>
    
        </div>
    )
}
export default Child2;