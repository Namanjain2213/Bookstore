import React from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { MdCancel } from "react-icons/md";
import Navbar from './Navbar';
import Footer from './Footer';

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        
      } = useForm(); 
    return (
        <>
            <div>
                <Navbar/>
                <div className=' dark:bg-slate-900 dark:text-white w-screen   flex justify-center items-center' >
                    <div className=' w-[80%] md:w-[50%]   mt-20 mb-16 border  ' >
                        <div className='flex items-center justify-between ' >
                            <h1 className='text-xl font-bold m-2 p-2' >Contact Form</h1>
                            <Link to='/' > <MdCancel className='mr-6 text-2xl' /></Link>
                        </div>
                        <form onSubmit={handleSubmit((data) => console.log(data))} >
                            <div className='m-2 p-2 ' >
                                <label className='font-semibold ' for="fullname">Fullname:</label><br />
                                <input type="text" placeholder='Enter your name' name='fullname' {...register('fullname', { required: true })} className='outline-none border bg-transparent text-black py-1 mt-2 w-full rounded-lg px-3 ' id='fullname' required />
                            </div>
                            <div className='m-2 p-2 ' >
                                <label className='font-semibold ' for="email">Email:</label><br />
                                <input type="email" placeholder='Enter your email' name='email' {...register('email', { required: true })} className='outline-none border bg-transparent py-1 mt-2 text-black w-full rounded-lg px-3 ' id="email" required />
                            </div>
                            <div className='m-2 p-2 ' >
                                <label className='font-semibold ' for="Number">Number:</label><br />
                                <input type="phone" placeholder='Enter your Number' name='number' {...register('number', { required: true })} className='outline-none border bg-transparent py-1 mt-2 w-full text-black rounded-lg px-3 ' id="number" required />
                            </div>
                            <div className='m-2 p-2 ' >
                                <label className='font-semibold ' for="text-area">Message:</label><br />
                                <textarea name="text-area" placeholder='Enter your message' id="text-area" {...register('message', { required: true })} className='outline-none border bg-transparent py-1 mt-2 w-full  text-black rounded-lg px-3'  rows={6} ></textarea>
                            </div>
                            <div className='m-2 p-2 flex flex-col md:flex-row gap-4 items-center full
                             ' >
                                <button className='btn bg-black text-white hover:bg-slate-800' >Submit</button>
                            </div>

                        </form>

                    </div>
                </div>
                <hr />
                <Footer/>
            </div>

        </>
    )
}

export default Contact