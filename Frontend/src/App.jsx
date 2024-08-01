
import './App.css'
import Home from './Pages/Home'
import {Routes , Route} from "react-router-dom"
import Course from './Components/Course'

function App() {


  return (
    <>
    <Routes>
     <Route path='/' element={<Home/>}  />  
     <Route path='/course' element={<Course/>} />    
    </Routes>
    </>
  )
}

export default App
