import React from 'react'
import Navbar from './Navbar'
import list from '../../public/list.json'
import Card from './Card';
import Footer from './Footer';
function Course() {
   
    return (
        <>
        <div className='dark:bg-slate-900'>
            <Navbar />
            <div className='w-[90%]  m-auto flex flex-col dark:bg-slate-900 dark:text-white justify-center items-center gap-2 mt-14 mb-10 ' >
            <div>
                <h1 className='text-2xl text-purple-800 font-bold mt-4' > Warm Welcome to here</h1></div>
                <div>
                    <p className='text-xl ml-10 mr-5'>Here is all books for reading you have to pay some amount</p>
                </div>



            <div className='  w-[90%]  dark:bg-slate-900 dark:text-white grid md:grid-cols-3 grid-col-1 shadow-xl  ' >
                {list.map((data, index) => {
                    return (
                        <Card key={index} data={data} />
                    )
                })
                }
            </div>
            </div>
            <hr />
            <Footer />
            </div>
        </>
    )
}

export default Course