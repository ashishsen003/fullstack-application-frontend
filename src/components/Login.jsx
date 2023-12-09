import React, { useState } from 'react'

const Login  = () => {

  const [email, setemail] = useState('')
  const [pass, setpass] = useState('')

  const handleLogin = ()=>{
    const payload = {
      email,
      pass
    }
    console.log(payload);
    fetch('https://dull-gold-dhole-fez.cyclic.app/users/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    .then(res=>res.json())
    .then((data)=>{
        console.log(data)
        localStorage.setItem('token', data.token)
        }
    )
    .catch(err=>console.log(err))
  }
  
  return (
    <div>
      <h3>Login with your credentials</h3>
      <input type='text' value={email} placeholder='Enter email...' onChange={(e)=>setemail(e.target.value)} />
      <input type='password' value={pass} placeholder='Enter pass...' onChange={(e)=>setpass(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export {Login}