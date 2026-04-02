// import React from 'react'
// import { useCallback } from 'react';
// import { useState } from 'react'

// function CallBack() {
//     const [count, setCount]=useState(0);
//     const increment=useCallback(() =>{
//         setCount(prev => prev +1);
//     },[]);
//     return (
//     <div>
//         <p>Count:{count}</p>
//         <button onClick={increment}>Increement</button>
//     </div>
//   )
// }

// export default CallBack
import React from 'react'
import { memo } from 'react';
import { useCallback } from 'react';
import { useState } from 'react'
 const TaskButton = memo(({onAdd}) =>{
    return <button onClick={onAdd}>Add Task</button>
 })
function CallBack() {
    const [tasks , setTasks]=useState([]);
    const addTask=useCallback(() =>{
        setTasks(prev => [...prev, `Task ${prev.length+1}`]);

    },[]);
    
  return (
    <div>
        <TaskButton onAdd={addTask}/>
        <ul>
            {tasks.map((task , i) => <li key={i}>{task}</li>) }
        </ul>
    </div>
  )
}

export default CallBack