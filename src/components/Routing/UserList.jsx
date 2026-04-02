import React from 'react'
import { useState } from 'react'
import { useMemo } from 'react'

function UserList({users=[]}) {

    const [search ,setSearch]=useState('');
    const filterUsers=useMemo(() =>{
        return users.filter(user => user.name.toLowerCase().includes(search.toLocaleLowerCase())
    );
    } ,[users , search]);
  return (
    <div>
        <input onChange={e => setSearch(e.target.value)} placeholder='enter your name'/>
        <ul>
            {filterUsers.map(user =>(
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>


    </div>
  )
}

export default UserList