import './App.css';
import NotesView from './components/NotesView';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import EditNotes from './components/editNotes/EditNotes';
import CreateNotes from './components/createNotes/CreateNotes';
import NotFound from './components/NotFound';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<NotesView />}></Route>
        <Route path='/create' element={<CreateNotes />}></Route>
        <Route path='/note/:id' element={<EditNotes/>}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      </BrowserRouter>
          
    </div>
  );
}

export default App;
