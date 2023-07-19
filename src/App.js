import './App.css';
import NotesView from './components/NotesView';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import EditNotes from './components/listNotes/EditNotes';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<NotesView />}></Route>
        <Route path='/note/:id' element={<EditNotes></EditNotes>}></Route>
      </Routes>
      </BrowserRouter>
          
    </div>
  );
}

export default App;
