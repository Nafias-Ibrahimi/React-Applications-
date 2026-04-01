import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react'

function RenderCounter() {

    const [count , setCount]=useState(0);
    const renderCount=useRef(0);

    useEffect(() =>{
        renderCount.current +=1;
    });
  return (
    <div>
        <p> count:{count}</p>
        <p>some renders :{renderCount.current}</p>
        <button onClick={() => setCount(count + 1)}>Add</button>

    </div>
  )
}

export default RenderCounter