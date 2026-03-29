import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const items = ["Apple", "Banana", "Orange"];
  function Greeting(props){
    return <h1>Welcome to : {props.name}</h1>
  }

  function User({name ,age}){
    return <h1>{name} -{age}</h1>
  }

function Button({ onClick,text }) {
  return <button onClick={onClick}>{text}Click Me</button>
}

    const handleClick=()=>alert('Button clicked');
    

//   return (
//     <div>
//       <h1>Counter App</h1>
//       <p>Cilck:{count}</p>
//       <button onClick={() => setCount(count + 1)}>+Increase</button>
//       <ul>
//         {items.map((fruit) => (
//           <li key={fruit+1}>{fruit}</li>
//         ))}
//       </ul>
//     </div>
//   );
return (
    <>
    <Greeting name='React.js'/>
    <User name='Ali' age={25}/>
    <Button onClick={handleClick} text='Click Me'/>
   </>
)
}
