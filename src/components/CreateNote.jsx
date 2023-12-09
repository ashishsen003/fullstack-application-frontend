import React, { useState } from 'react'

const CreateNote  = () => {

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const handleSubmit = ()=>{
    const payload = {
      title,
      body
    }
    console.log(payload);
    fetch('https://dull-gold-dhole-fez.cyclic.app/notes/create', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(payload)
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
  }
  
  return (
    <div>
      <h3>CreateNote a new Note</h3>
      <input type='text' value={title} placeholder='Enter title...' onChange={(e)=>setTitle(e.target.value)} />
      <textarea type='password' value={body} placeholder='Enter body...' onChange={(e)=>setBody(e.target.value)} />
      <button onClick={handleSubmit}>CreateNote</button>
    </div>
  )
}

export {CreateNote}