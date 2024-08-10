import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';
import { MdOutlineCancel } from 'react-icons/md';

function VerifyOtp({ email, setVerifyOtp }) {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleVerifyOtp = async (data) => {
        try {
            const response = await axios.post("https://bookstore-backend-3wat.onrender.com/reset/verify-otp", {
                email: email,
                otp: data.otp,
                newPassword: data.newPassword
            });
            toast.success("Password reset successfully.");
            setVerifyOtp(false); // Optionally close the OTP form
            // Redirect or handle success
        } catch (error) {
            console.error(error);
            toast.error(`Failed: ${error.response?.data?.message || error.message}`);
        }
    };

    return (
        <div className="p-6 bg-white rounded-lg dark:bg-slate-900 shadow-lg">
            <div className='flex  justify-between ' >
            <h2 className="text-lg font-bold mb-4">Verify OTP</h2>
            <MdOutlineCancel className='text-xl mt-1' onClick={()=>{setVerifyOtp(false)}} />
            </div>
            <form onSubmit={handleSubmit(handleVerifyOtp)} className="flex flex-col gap-3">
                <label>
                    OTP<sup className="text-red-500">*</sup><br />
                    <input
                        type="text"
                        placeholder="Enter OTP"
                        required
                        className="w-full border-2 outline-none bg-transparent rounded-[5px] p-2"
                        {...register('otp', { required: "OTP is required" })}
                    />
                    {errors.otp && <span className="text-red-500">{errors.otp.message}</span>}
                </label>
                <label>
                    New Password<sup className="text-red-500">*</sup><br />
                    <input
                        type="password"
                        required
                        placeholder="Enter New Password"
                        className="w-full border-2 outline-none bg-transparent rounded-[5px] p-2"
                        {...register('newPassword', { required: "New password is required" })}
                    />
                    {errors.newPassword && <span className="text-red-500">{errors.newPassword.message}</span>}
                </label>
                <button
                    type="submit"
                    className="btn w-full bg-black border-2 border-rose-500 text-white rounded-[5px] py-2 mt-2 cursor-pointer hover:bg-slate-800 hover:text-white transition-all duration-500"
                >
                    Reset Password
                </button>
            </form>
        </div>
    );
}

export default VerifyOtp;
