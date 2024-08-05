import React from 'react'
import { Link } from 'react-router-dom';
import Login from '../Components/Login'
import { MdCancel } from "react-icons/md";
import { useForm } from 'react-hook-form';
function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },

  } = useForm(); 
  return (
    <>
    <div className=' dark:bg-slate-900 dark:text-white w-screen h-screen flex justify-center items-center' >
      <div className=' w-[80%] md:w-[50%] border h-fit  ' >
        <div className='flex items-center justify-between ' >
        <h1 className='text-xl font-bold m-4 p-2' >Signup</h1>
       <Link to='/' > <MdCancel className='mr-6 text-2xl' /></Link>
        </div>
        <form onSubmit={handleSubmit((data) => console.log(data))} >
        <div className='m-4 p-2 ' >
          <label className='font-semibold ' for="username">Username:</label><br />
          <input type="text" placeholder='Enter your name' name='username' {...register('username', { required: true })} className='outline-none border text-black py-1 mt-2 bg-transparent w-full rounded-lg px-3 ' id='username' required />
        </div>
        <div className='m-4 p-2 ' >
          <label className='font-semibold ' for="email">Email:</label><br />
          <input type="email" placeholder='Enter your email' name='email' {...register('email', { required: true })}  className='outline-none text-black border py-1 mt-2 w-full rounded-lg bg-transparent px-3 ' id="email" required />
        </div>
        <div className='m-4 p-2 ' >
          <label className='font-semibold ' for="password">Password:</label><br />
          <input type="password" placeholder='Enter your password' name='password' {...register('password', { required: true })} className='outline-none border text-black py-1 mt-2 w-full bg-transparent rounded-lg px-3 ' id="password"required />
        </div>
        <div className='m-4 p-2 ' >
          <label className='font-semibold ' for="confirm_password">Confirm Password:</label><br />
          <input type="password" placeholder='Confirm your password' name='confirm-password' {...register('confirm-password', { required: true })} className='outline-none text-black border bg-transparent py-1 mt-2 w-full rounded-lg px-3 ' id="password" required  />
        </div>
        <div className='m-4 p-2 flex flex-col md:flex-row gap-4 items-center full
                             ' >
                              <button className='btn bg-black text-white hover:bg-slate-800' >Signup</button>
                                <p> Not Register ? <span   onClick={()=>document.getElementById('my_modal_3').showModal()} className='text-blue-500 font-bold cursor-pointer ' >Login</span> <Login /></p>
                            </div>

        </form>
       
      </div>
      </div>
    </>
  )
}

export default Signup;