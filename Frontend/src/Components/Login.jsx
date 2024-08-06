import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ImCancelCircle } from 'react-icons/im';

function Login() {
    const [currState, setCurrState] = useState('Login');
    const [showLogin, setShowLogin] = useState(true);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <>
            <div className='dark:bg-slate-900 dark:text-white'>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box dark:bg-slate-900 dark:text-white">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <div className="flex flex-col justify-center items-center w-[100%] h-full  z-1">
                            <form onSubmit={handleSubmit((data) => console.log(data))} className="login-popup-container flex flex-col gap-3  z-10 bg-transparent rounded-[10px] p-3">
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
                                                name='name'
                                                className="w-full border-2 outline-none s rounded-[5px] p-1"
                                                {...register('name', { required: true })}
                                            />
                                        </label>
                                    )}
                                    <label>
                                        Email<sup className="text-red-500">*</sup><br />
                                        <input
                                            type="email"
                                            placeholder="Enter Your Email"
                                            required
                                            name='email'
                                            className="w-full border-2 outline-none  rounded-[5px] p-1"
                                            {...register('email', { required: true })}
                                        />
                                    </label>
                                    <label>
                                        Password<sup className="text-red-500">*</sup><br />
                                        <input
                                            type="password"
                                            placeholder="Enter Your Password"
                                            required
                                            name='Password'
                                            className="w-full border-2 outline-none  rounded-[5px] p-1"
                                            typeof=''
                                            {...register('password', { required: true })}
                                        />
                                    </label>
                                </div>

                                <button className="w-full bg-black text-white  rounded-[5px] shadow-xl py-1 mt-2 cursor-pointer hover:bg-slate-900 hover:text-white transition-all duration-500">
                                    {currState === "Sign Up" ? "Create Account" : "Login"}
                                </button>

                                <div className="login-popup-condition flex items-center gap-2">
                                    <input className="cursor-pointer" type="checkbox" required />
                                    <p>By continuing, I agree to the terms of use & privacy policy.</p>
                                </div>
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
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </>
    );
}

export default Login;
