// import React from 'react'

// function Welcome(props) {
//   return (
//     <div>Welcome:{props.name}</div>
//   )
// }

// export default Welcome
// import React, { useState } from "react";

// // function Welcomes({ name }) {
// //   return <h1>Hello :{name}</h1>;
// // }

// function Welcome() {
//   const [count, setCount] = useState(0);

//   const color = count > 0 ? "green" : count < 0 ? "red" : "gray";
//   let message = "";
//   if (count > 10) {
//     message = "Too High";
//   } else if (count < -10) {
//     message = "Too Low!";
//   }
//   return (
//     <div
//       style={{
//         height: "100vh",
//         background: "#1e293b",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <div
//         style={{
//           background: "white",
//           padding: "30px",
//           borderRadius: "15px",
//           textAlign: "center",
//           boxShadow: "0 0 20px rgba(0,0,0,0.3)",
//         }}
//       >
//         <h1 style={{ color: color, fontSize: "50px" }}>Count :{count}</h1>
//         <h2>{message}</h2>
//         <div style={{ marginTop: "20px" }}>
//           <button style={{ margin: "5px" }} onClick={() => setCount(count + 1)}>
//             increase
//           </button>
//           <button style={{ margin: "5px" }} onClick={() => setCount(count - 1)}>
//             decrease
//           </button>
//           <button style={{ margin: "5px" }} onClick={() => setCount(0)}>
//             Reset
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Welcome;

import React, { useEffect, useState } from 'react'

function Welcome() {
    // const [text, setText]=useState('');
    const [count , setCount]=useState(0);
    useEffect(()=>{
        console.log('count', count);

    } ,[count]);
  return (
    <div>
        <p>{count}</p>
        <button onClick={()=> setCount(count +1)}>Increase</button>
        <button onClick={()=> setCount(count -1)}>decrease</button>
        {/* <input type="text" value={text} onChange={(e) =>setText(e.target.value)}/>
        <h2>{Text}</h2> */}
        {/* <h1>welcome to useEEfect</h1> */}


    </div>
  )
    }




export default Welcome