import React, { useEffect, useState } from 'react';

const Notes = () => {
  const [data, setData] = useState([]);
  const [editNote, setEditNote] = useState(null);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedBody, setEditedBody] = useState('');

  useEffect(() => {
    fetch('https://dull-gold-dhole-fez.cyclic.app/notes', {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData([...data]);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (el) => {
    fetch(`https://dull-gold-dhole-fez.cyclic.app/notes/delete/${el._id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData([...data]);
      })
      .catch((err) => console.log(err));
  };

  const handleEdit = (el) => {
    setEditNote(el);
    setEditedTitle(el.title);
    setEditedBody(el.body);
  };

  const handleSaveEdit = () => {
    // Make a request to update the note on the server
    fetch(`https://dull-gold-dhole-fez.cyclic.app/notes/update/${editNote._id}`, {
      method: 'PATCH', // Assuming your server supports updating via PUT
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        title: editedTitle,
        body: editedBody,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData([...data]);
        setEditNote(null); // Reset edit state
        setEditedTitle('');
        setEditedBody('');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h3>All notes are here</h3>
      {data.map((el, i) => {
        return (
          <div key={i}>
            <h3>{el.title}</h3>
            <p>{el.body}</p>
            <button onClick={() => handleEdit(el)}>Edit</button>
            <button onClick={() => handleDelete(el)}>Delete</button>
          </div>
        );
      })}

      {editNote && (
        <div>
          <h3>Edit Note</h3>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <textarea
            value={editedBody}
            onChange={(e) => setEditedBody(e.target.value)}
          ></textarea>
          <button onClick={handleSaveEdit}>Save</button>
        </div>
      )}
    </div>
  );
};

export { Notes };
