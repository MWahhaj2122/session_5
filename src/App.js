import React, { useState } from 'react';
import Parent from './Parent';
import CounterContext from './CounterContext'
import './App.css';

function App() {

  let countState = useState(1) //count and setCount and countState has first index [] and second function ()   is a setCount

  return (
    <CounterContext.Provider value = {countState}>
    <div >
      <Parent />
    
      </div>
      </CounterContext.Provider>
  )
}

export default App;
