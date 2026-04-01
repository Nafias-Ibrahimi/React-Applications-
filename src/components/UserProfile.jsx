import React, { useState } from 'react'

function UserProfile() {
    const [name, setName]=useState('');
    const [age ,setAge]=useState(0);

  return (
    <div>
<input type="text" onChange={e =>setName(e.target.value)} placeholder='enter your name'/>
<input type="number" onChange={e =>setAge(e.target.value)}  placeholder='enter your age'/>

<p>{name} is {age} your old</p>
    </div>
  )
}

export default UserProfile