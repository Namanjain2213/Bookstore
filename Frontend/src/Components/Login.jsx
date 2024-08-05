import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';


function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm(); 
    return (
        <>
            <div className='dark:bg-slate-900 dark:text-white' >
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box dark:bg-slate-900 dark:text-white ">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <div className=' text-xl font-bold m-4 p-2' >Login</div>
                        <form onSubmit={handleSubmit((data) => console.log(data))} className='w-full ' >
                            <div className='m-4 p-2 ' >
                                <label className='font-bold' for="username">Username:</label><br />
                                <input type="text" id="username" name="username" required {...register('username', { required: true })} className=' w-full text-black bg-transparent mt-2 outline-none border px-3  py-1' placeholder='Enter User name' /><br />
                            </div>
                            <div className='m-4 p-2 ' >
                                <label className='font-bold' for="password">Password:</label><br />
                                <input type="password" id='password' name='password' required {...register('password', { required: true })} className=' mt-2 w-full bg-transparent text-black outline-none border px-3 py-1  ' placeholder=' Enter password' />
                            </div>

                            <div className='m-4 p-2 flex flex-col md:flex-row gap-4 items-center full
                             ' >
                                <button className='btn bg-black text-white hover:bg-slate-800' >Login</button>
                                <p> Not Register ? <Link to='singup' className='text-blue-500 font-bold cursor-pointer ' >Signup</Link> </p>
                            </div>

                        </form>

                    </div>
                </dialog>
            </div>

        </>
    )
}

export default Login