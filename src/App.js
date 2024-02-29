import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage';
import Loginpage from './pages/loginpage';
import Registerpage from './pages/registerpage';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/login' element={<Loginpage/>} />
        <Route path='/register' element={<Registerpage/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
