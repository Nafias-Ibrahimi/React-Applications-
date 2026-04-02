import React from 'react'
import { useMemo } from 'react';
import { useState } from 'react'

function UseMemo() {
    const [count ,setCount]=useState(0);
    // const total=slowCalculation(count);

    const total=useMemo(() =>{
        return slowCalculation(count);

    } ,[count]);
  

  return (
    <div>

   <p>Total:{total}</p>
   <button onClick={() => setCount(count +1)}>Increase</button>
    </div>
  )
}

function slowCalculation(num){
  console.log('calculating..');
  let result=0;
  for(let i=0; i < num * 2; i++){
    result +=Math.random();
  }
  return result;
}

export default UseMemo

