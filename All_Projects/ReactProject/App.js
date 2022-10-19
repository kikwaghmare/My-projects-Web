import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Home/HomePage';
import BollywoodPage from './Pages/Bollywood/BollywoodPage';
import Tech from './Pages/TechnologyPage/Technology';
import Hollywood from './Pages/HollywoodPage/Hollywood';
import Fitness from './Pages/FitnessPage/Fitness';
import Food from './Pages/FoodPage/Food';
import { Heading } from './Pages/NextPage/Heading';
import Heading2 from './Pages/NextPage/Heading2';
import { Heading3 } from './Pages/NextPage/Heading3';
import { NavBar } from './Pages/NavBar';


function App() {

 
  return (
    <>

    <BrowserRouter>
        <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/heading1' element={<Heading/>} />
        <Route path='/heading2' element={<Heading2/>} />
        <Route path='/heading3' element={<Heading3/>} />


        <Route path='/Bollywood' element={<BollywoodPage/>} />
        <Route path='/Technology' element={<Tech/>} />
        <Route path='/Hollywood' element={<Hollywood/>} />
        <Route path='/Fitness' element={<Fitness/>}/>
        <Route path='/Food' element={<Food/>} />
        </Routes>
        </BrowserRouter>
  </>
  );
}

export default App;
