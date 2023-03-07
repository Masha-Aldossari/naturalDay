
import './App.css'
import Buttons from './component/Buttons'
import LogIn from './component/LogIn'
import HomePage from './component/HomePage';
import { Routes, Route } from 'react-router-dom';



function App() {


  return (
    <div>
        
           <Routes>
           <Route path="/" element={<Buttons/>}></Route>
           <Route path="/welcome" element={<LogIn/>}></Route>
           <Route path="/Saudi" element={<HomePage/>}></Route>

           </Routes>
        
    </div>
  )
}

export default App
