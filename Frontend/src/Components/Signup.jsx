import React from 'react'
import { Link } from 'react-router-dom';
import { MdCancel } from "react-icons/md";
function Signup() {
  return (
    <>
    <div className='w-screen h-screen flex justify-center items-center' >
      <div className=' w-[80%] md:w-[50%] border h-fit  ' >
        <div className='flex items-center justify-between ' >
        <h1 className='text-xl font-bold m-4 p-2' >Signup</h1>
       <Link to='/' > <MdCancel className='mr-6 text-2xl' /></Link>
        </div>
        <form>
        <div className='m-4 p-2 ' >
          <label className='font-semibold ' for="username">Username:</label><br />
          <input type="text" placeholder='Enter your name' className='outline-none border py-1 mt-2 w-full rounded-lg px-3 ' id='username' required />
        </div>
        <div className='m-4 p-2 ' >
          <label className='font-semibold ' for="email">Email:</label><br />
          <input type="email" placeholder='Enter your email' className='outline-none border py-1 mt-2 w-full rounded-lg px-3 ' id="email" required />
        </div>
        <div className='m-4 p-2 ' >
          <label className='font-semibold ' for="password">Password:</label><br />
          <input type="password" placeholder='Enter your password' className='outline-none border py-1 mt-2 w-full rounded-lg px-3 ' id="password"required />
        </div>
        <div className='m-4 p-2 ' >
          <label className='font-semibold ' for="confirm_password">Confirm Password:</label><br />
          <input type="password" placeholder='Confirm your password' className='outline-none border py-1 mt-2 w-full rounded-lg px-3 ' id="password" required  />
        </div>
        <div className='m-4 p-2 flex flex-col md:flex-row gap-4 items-center full
                             ' >
                                <button className='btn bg-black text-white hover:bg-slate-800' >Signup</button>
                                <p> Not Register ? <Link to='/' className='text-blue-500 font-bold cursor-pointer ' >Login</Link> </p>
                            </div>

        </form>
       
      </div>
      </div>
    </>
  )
}

export default Signup;