import React, { useState } from 'react'

function Form() {
    const [user ,setUser]= useState({email: '' , password:''});

      const [error ,setError]=useState('');
    const handleSubmit=()=>{
        console.log(user);
        if(user.email===''){
            setError('email is erquired');
            return;
        }
        setError('');
        console.log('User Data :' ,user);
    }

  
  return (
    <div style={{height:'100vh' ,display:'flex',justifyContent:'center'
        ,alignItems:'center ',background:"#0f172a",
    }}>
<div style={{background:'while',    padding: "30px",
          borderRadius: "10px",
          width: "300px",
          textAlign: "center",
        }}>
            <h2>Login</h2>
            {error && <p style={{color:'red'}}>{error}</p>}
            <input type='email' onChange={e => setUser({...user ,email: e.target.value})} placeholder='Email..' style={{ width: "100%", marginBottom: "10px", padding: "8px" }}/>
        <input type='password' onChange={e => setUser({...user ,password: e.target.value})} placeholder='password..' style={{ width: "100%", marginBottom: "10px", padding: "8px" }}/>
        <button onClick={handleSubmit} style={{
            width: "100%",
            padding: "10px",
            background: "blue",
            color: "white",
            border: "none",
            cursor: "pointer",}}>click</button>

</div>


    </div>
  )
}

export default Form