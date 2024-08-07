import React from 'react'
import banner from '../assets/banner1.png'

function Banner() {
    return (
        <>
            <div className=' md:w-[90%]   h-fit flex flex-col md:flex-row justify-center items-center m-auto mt-16 mb-10 ' >
                <div className='left w-[90%] md:w-[50%] ml-1 mt-3 ' >
                    <div>
                        <h1 className='text-4xl font-bold' >Hello, Welcome here to learn something <span className='text-purple-600' >new everyday</span> </h1>
                    </div>
                    <div className='mt-6' >
                        <p className='text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam fugiat atque culpa labore aspernatur quos quas dicta molestiae sint suscipit dolore temporibus obcaecati perspiciatis facilis dolorum consectetur animi</p>
                    </div>

                    <div className='mt-6 mr-2 '>
                        <label className="border p-2 rounded-xl flex items-center gap-2 ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path
                                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input type="text" className="outline-none dark:bg-slate-900 " placeholder="Email" />
                        </label>
                    </div>
                    <div className='mt-6' >
                    <button className="btn bg-black text-white hover:bg-slate-900  ">Learn more</button>
                    </div>
                </div>
                <div className='right w-[90%] md:w-[50%] mt-10 md:ml-10 dark:bg-slate-900'>
                    <img src={banner} alt="" className=' bg-transparent  ' />
                </div>
            </div>
        </>
    )
}

export default Banner