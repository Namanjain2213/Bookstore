import React from 'react';
import { useAuth } from '../Context/Authprovider';
import toast from 'react-hot-toast';

function Logout() {
  const [authUser, setAuthUser] = useAuth();

  const handleLogout = () => {
    try {
      setAuthUser(null);
      localStorage.removeItem("Users");
      toast.success("Logout successfully");
      setTimeout(() => {
        window.location.reload();     
      },1000);
   
    } catch (error) {
      toast.error("Error: " + error.message);
    }
  };

  return (
    <div>
      <button onClick={handleLogout} className='btn bg-red-700 text-white hover:bg-red-500'>
        Logout
      </button>
    </div>
  );
}

export default Logout;
