import React from 'react'
import { Link } from 'react-router-dom';


function Login() {
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
                        <form action="" className='w-full ' >
                            <div className='m-4 p-2 ' >
                                <label className='font-bold' for="username">Username:</label><br />
                                <input type="text" id="username" name="username" required className=' w-full outline-none border  py-1' placeholder='Enter User name' /><br />
                            </div>
                            <div className='m-4 p-2 ' >
                                <label className='font-bold' for="password">Password:</label><br />
                                <input type="password" id='password' name='password' required className=' w-full outline-none border py-1' placeholder=' Enter password' />
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