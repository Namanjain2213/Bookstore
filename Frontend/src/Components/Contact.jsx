import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { MdCancel } from "react-icons/md";
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';
import toast from 'react-hot-toast';

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm(); 
     
    // Function to handle form submission
    const onSubmit = async (data) => {
        try {
            const response = await axios.post('https://bookstore-backend-3wat.onrender.com/contact/ct', data);

            if (response.status === 201) {
                // Handle successful response
                console.log('Success:', response.data);
                toast.success('Message sent successfully!');
            } else {
                // Handle 
                console.error('Unexpected response:', response);
                toast.error('Failed to send message. Please try again.');
            }
        } catch (error) {
            // Handle network or other errors
            console.error('Error:', error);

            toast.error(`Failed:  ${error.response?.data?.message || error.message}`);
        }
    };

    return (
        <>
            <div>
                <Navbar/>
                <div className='dark:bg-slate-900 dark:text-white w-screen flex justify-center items-center'>
                    <div className='w-[80%] md:w-[50%] mt-20 mb-16 border'>
                        <div className='flex items-center justify-between'>
                            <h1 className='text-xl font-bold m-2 p-2'>Contact Form</h1>
                            <Link to='/'>
                                <MdCancel className='mr-6 text-2xl' />
                            </Link>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='m-2 p-2'>
                                <label className='font-semibold' htmlFor="fullname">Full Name:</label><br />
                                <input type="text" placeholder='Enter your name' name='fullname' {...register('fullname', { required: true })} className='outline-none border bg-transparent text-black py-1 mt-2 w-full rounded-lg dark:text-white px-3' id='fullname' required />
                            </div>
                            <div className='m-2 p-2'>
                                <label className='font-semibold' htmlFor="email">Email:</label><br />
                                <input type="email" placeholder='Enter your email' name='email' {...register('email', { required: true })} className='outline-none border bg-transparent py-1 mt-2 text-black w-full dark:text-white rounded-lg px-3' id="email" required />
                            </div>
                            <div className='m-2 p-2'>
                                <label className='font-semibold' htmlFor="number">Number:</label><br />
                                <input type="phone" placeholder='Enter your Number' name='number' {...register('number', { required: true })} className='outline-none border bg-transparent py-1 mt-2 w-full dark:text-white text-black rounded-lg px-3' id="number" required />
                            </div>
                            <div className='m-2 p-2'>
                                <label className='font-semibold' htmlFor="message">Message:</label><br />
                                <textarea name="message" placeholder='Enter your message' id="message" {...register('message', { required: true })} className='outline-none border bg-transparent py-1 mt-2 w-full dark:text-white text-black rounded-lg px-3' rows={6}></textarea>
                            </div>
                            <div className='m-2 p-2 flex flex-col md:flex-row gap-4 items-center'>
                                <button type="submit" className='btn bg-black text-white hover:bg-slate-800'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
                <hr />
                <Footer/>
            </div>
        </>
    );
}

export default Contact;
