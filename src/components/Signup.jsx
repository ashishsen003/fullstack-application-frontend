import React, { useState } from 'react'

const Signup = () => {

  const [username, setUsername] = useState('')
  const [email, setemail] = useState('')
  const [pass, setpass] = useState('')

  const handleRegister = ()=>{
    const payload = {
      username,
      email,
      pass
    }
    console.log(payload);
    fetch('https://dull-gold-dhole-fez.cyclic.app/users/register', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
  }
  
  return (
    <div>
      <h3>Register a new user</h3>
      <input type='text' value={username} placeholder='Enter username...' onChange={(e)=>setUsername(e.target.value)} />
      <input type='text' value={email} placeholder='Enter email...' onChange={(e)=>setemail(e.target.value)} />
      <input type='password' value={pass} placeholder='Enter pass...' onChange={(e)=>setpass(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
    </div>
  )
}

export {Signup}