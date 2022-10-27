import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from './Home';
import { Student } from './Student';
import { Contact } from './Contact';
import Add from './Addstudent';
import Edit from './Edit';

function App() {
  return (
    <div>

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Student' element={<Student/>} />
        <Route path='Add' element = {<Add/>} />
        <Route path='Edit' element = {<Edit/>} />
        <Route path='/Contact' element={<Contact/>} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
