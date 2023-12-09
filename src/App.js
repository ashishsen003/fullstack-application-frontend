import './App.css';
import {Routes, Route} from 'react-router-dom'
import { Signup } from './components/Signup';
import { Login } from './components/Login';
import { CreateNote } from './components/CreateNote';
import { Notes } from './components/Notes';
import { Edit } from './components/Edit';

function App() {
  return (
    <div className="App">
      <h2>Notes App</h2>
      <Routes>
        <Route path='/register' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/addnote' element={<CreateNote/>} />
        <Route path='/notes' element={<Notes/>} />
        <Route path='/edit' element={<Edit/>} />
      </Routes>
    </div>
  );
}

export default App;
