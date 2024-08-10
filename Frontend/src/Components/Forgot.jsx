import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';
import { MdOutlineCancel } from 'react-icons/md';
import { Link } from 'react-router-dom';
import VerifyOtp from './Verifyotp';

function Forgot({ setShowForgotPassword }) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [verifyOtp, setVerifyOtp] = useState(false);
    const [email, setEmail] = useState('');

    const handleForgotPassword = async (data) => {
        try {
            // Make a POST request to the forgot password endpoint
            console.log(data);
            const response = await axios.post("https://bookstore-backend-3wat.onrender.com/forget/forgot-password", { email: data.email });
            toast.success("Reset link sent. Check your email.");
            setEmail(data.email); // Set email state
            setVerifyOtp(true); // Show OTP form
        } catch (error) {
            console.error(error);
            toast.error(`Failed: ${error.response?.data?.message || error.message}`);
        }
    };

    return (
        <div className="p-6 bg-white rounded-lg dark:bg-slate-900 shadow-lg">
            <div className='flex justify-center gap-8'>
                <h2 className="text-lg font-bold mb-4">Forgot Password</h2>
                <Link to='#' onClick={() => setShowForgotPassword(false)}> 
                    <MdOutlineCancel className='text-xl mt-1' />
                </Link>
            </div>
            <form onSubmit={handleSubmit(handleForgotPassword)} className="flex flex-col gap-3">
                <label>
                    Email<sup className="text-red-500">*</sup><br />
                    <input
                        type="email"
                        placeholder="Enter Your Email"
                        className="w-full border-2 outline-none bg-transparent rounded-[5px] p-2"
                        {...register('email', {
                            required: "Email is required",
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: "Entered value does not match email format"
                            }
                        })}
                    />
                    {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                </label>
                <button
                    type="submit"
                    className="btn w-full bg-black border-2 border-rose-500 text-white rounded-[5px] py-2 mt-2 cursor-pointer hover:bg-slate-800 hover:text-white transition-all duration-500"
                    onClick={()=>{setVerifyOtp(true)}}
                >
                    Send Reset Link
                </button>
            </form>
            {verifyOtp && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <VerifyOtp email={email} setVerifyOtp={setVerifyOtp} />
                </div>
            )}
        </div>
    );
}

export default Forgot;
