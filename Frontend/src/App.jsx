
import './App.css'
import Home from './Pages/Home'
import {Routes , Route} from "react-router-dom"
import Course from './Components/Course'
import Signup from './Components/Signup'

function App() {


  return (
    <>
    <Routes>
     <Route path='/' element={<Home/>}  />  
     <Route path='/course' element={<Course/>} />    
     <Route path='/singup' element={<Signup/>} />
    </Routes>
    </>
  )
}

export default App
