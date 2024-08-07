import './App.css';
import Home from './Pages/Home';
import Login from './Components/Login'; // Ensure the path is correct
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Course from './Components/Course';
import Contact from './Components/Contact';
import { useAuth } from './Context/Authprovider';
import toast from 'react-hot-toast';
import { useEffect } from 'react';

function App() {
  const [authUser] = useAuth();
  const location = useLocation();

  // This component will handle redirection and showing the toast
  const ProtectedRoute = ({ element }) => {
    useEffect(() => {
      if (!authUser) {
        toast.error('Please login first');
      }
    }, [authUser]);

    return authUser ? element : <Navigate to="/" />;
  };

  return (
    <>
      <Routes location={location}>
        <Route path='/' element={<Home />} />
        <Route 
          path='/course' 
          element={<ProtectedRoute element={<Course />} />}
        />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
