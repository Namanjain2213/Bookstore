import React from 'react'

function Card(props) {
    const data = props.data
    return (
        <>
            <div className='' >
                <div class=" flex ml-2  gap-4 shadow-2xl flex-col  dark:bg-slate-900 dark:text-white rounded-xl bg-white mt-4  text-gray-700 ">
                    <div class=" mx-4 mt-4 h-full overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                        <img
                            src={data.image}
                            class="h-full w-full object-cover bg-transparent "
                        />
                    </div>
                    <div class="p-6">
                        <div class="mb-2 flex items-center justify-between">
                            <p class="block font-sans text-xl font-medium leading-relaxed text-blue-900 ">
                                {data.name}
                            </p>
                            <p class="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 ">
                            {data.price}    
                            </p>
                        </div>
                        <p class="block font-sans text-xl font-bold leading-normal dark:text-white  text-black  ">
                            {data.title}
                        </p>
                        <p class=" font-sans text-lg font-bold leading-normal mt-3 dark:text-white text-black  ">
                           category: <span className='bg-error px-4 py-1 rounded-full text-white font-bold ' > {data.category} </span> 
                        </p>
                    </div>
                    <hr />
                    <div class="p-6 pt-0">
                        <button
                            class="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
                
            </div>
                
        </>
    )
}

export default Card