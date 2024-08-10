import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import axios from 'axios';
import Forgot from './Forgot'; // Adjust the import path based on your project structure

function Login() {
    const [currState, setCurrState] = useState('Login');
    const [showForgotPassword, setShowForgotPassword] = useState(false); // State to manage forgot password modal

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const userinfo = {
            fullname: data.name,
            email: data.email,
            password: data.password
        };

        try {
            if (currState === "Sign Up") {
                const response = await axios.post("https://bookstore-backend-3wat.onrender.com/user/signup", userinfo);
                toast.success("Signup successful");
                console.log(response.data);
                document.getElementById("my_modal_3").close();
                setTimeout(() => {
                    window.location.reload();
                    localStorage.setItem("Users", JSON.stringify(response.data));
                }, 1000);
            } else if (currState === "Login") {
                const response = await axios.post("https://bookstore-backend-3wat.onrender.com/user/login", userinfo);
                toast.success("Login successful");
                document.getElementById("my_modal_3").close();
                setTimeout(() => {
                    window.location.reload();
                    localStorage.setItem("Users", JSON.stringify(response.data));
                }, 1000);
            }
        } catch (error) {
            console.error(error);
            toast.error(`Failed: ${error.response?.data?.message || error.message}`);
        }
    };

    const handleForgotPasswordClick = () => {
        setShowForgotPassword(true);
        document.getElementById("my_modal_3").close();
    };

    return (
        <div className='dark:bg-slate-900 dark:text-white'>
            {/* Main Login/Signup Form */}
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box dark:bg-slate-900 dark:text-white">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div className="flex flex-col justify-center items-center w-[100%] h-full z-1">
                        <form onSubmit={handleSubmit(onSubmit)} className="login-popup-container flex flex-col gap-3 z-10 bg-transparent rounded-[10px] p-3">
                            <div className="login-popup-title flex justify-between items-center">
                                <h2 className="text-lg font-bold">{currState}</h2>
                            </div>

                            <div className="login-popup-inputs flex flex-col gap-2">
                                {currState === "Login" ? null : (
                                    <label>
                                        Name<sup className="text-red-500">*</sup><br />
                                        <input
                                            type="text"
                                            placeholder="Enter Your Name"
                                            required
                                            className="w-full border-2 outline-none bg-transparent rounded-[5px] p-1"
                                            {...register('name', { required: "Name is required" })}
                                        />
                                        {errors.name && <span className="text-red-500">{errors.name.message}</span>}
                                    </label>
                                )}
                                <label>
                                    Email<sup className="text-red-500">*</sup><br />
                                    <input
                                        type="email"
                                        placeholder="Enter Your Email"
                                        required
                                        className="w-full border-2 bg-transparent outline-none rounded-[5px] p-1"
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
                                <label>
                                    Password<sup className="text-red-500">*</sup><br />
                                    <input
                                        type="password"
                                        required
                                        placeholder="Enter Your Password"
                                        className="w-full border-2 outline-none rounded-[5px] p-1 bg-transparent"
                                        {...register('password', { required: "Password is required" })}
                                    />
                                    {errors.password && <span className="text-red-500">{errors.password.message}</span>}
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="btn w-full bg-black border-2 border-rose-500 text-white rounded-[5px] py-1 mt-2 cursor-pointer hover:bg-slate-800 hover:text-white transition-all duration-500"
                            >
                                {currState === "Sign Up" ? "Create Account" : "Login"}
                            </button>
                            <div className='flex flex-col md:flex-row md:gap-10 mt-2'>
                                {currState === "Login" ? (
                                    <p>Create a new account?
                                        <span
                                            onClick={() => setCurrState("Sign Up")}
                                            className="text-blue-500 ml-2 cursor-pointer"
                                        >
                                            Click here
                                        </span>
                                    </p>
                                ) : (
                                    <p>Already have an account?
                                        <span
                                            onClick={() => setCurrState("Login")}
                                            className="text-blue-500 ml-2 cursor-pointer"
                                        >
                                            Click here
                                        </span>
                                    </p>
                                )}
                                <p
                                    className="text-blue-500 cursor-pointer"
                                    onClick={handleForgotPasswordClick}
                                >
                                    Forgot Password?
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>

            {/* Forgot Password Section */}
            {showForgotPassword && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <Forgot setShowForgotPassword={setShowForgotPassword} />
                </div>
            )}
        </div>
    );
}

export default Login;
