
import './App.css'
import Home from './Pages/Home'
import {Routes , Route} from "react-router-dom"
import Course from './Components/Course'
import Signup from './Components/Signup'
import Contact from './Components/Contact'

function App() {


  return (
    <>
    <Routes>
     <Route path='/' element={<Home/>}  />  
     <Route path='/course' element={<Course/>} />    
     <Route path='/singup' element={<Signup/>} />
     <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </>
  )
}

export default App
