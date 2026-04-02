import React from 'react'
import { useState } from 'react'

function ControlledForm() {
    const [name, setName]=useState('');

    
  return (
    <div>
        <input type="text" value={name} placeholder='Enter name'
        onChange={e => setName(e.target.value)}/>
    </div>
  )
}

export default ControlledForm