import React from 'react'
import { useMemo } from 'react';
import { useState } from 'react'

function SortNumber({numbers}) {
    const [ascending ,setAscending]= useState(true);
    const sortedNumber=useMemo(() =>{
        console.log('Sorting ...');
        return [...numbers].sort((a,b) =>
            ascending ? a-b : b-a
        );
    },[numbers ,ascending]);
  return (
    <div>
<button onClick={() =>setAscending(!ascending)}>Toggle Order</button>
<p>{sortedNumber.join(',')}</p>
    </div>
  )
}

export default SortNumber