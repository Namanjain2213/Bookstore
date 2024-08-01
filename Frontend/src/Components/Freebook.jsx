import React from 'react'
import list from '../../public/list.json'
import Card from './Card';
function Freebook() {
const filterdata = list.filter((data)=> data.category === "Free")
console.log(filterdata);    
return (
    <>
     <div className='w-[90%] pt-6 flex flex-col  m-auto mt-6 mb-6 '>
        <h1 className='text-3xl font-bold text-teal-800' >Free Books</h1>
        <p className='mt-4 text-xl' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, doloribus debitis ratione atque nihil quas fugit recusandae molestias</p>
        <div className='grid md:grid-cols-3 grid-col-1 shadow-xl   gap-2 mt-6 ' >
            {filterdata.map((data, index) => {
                return (
                    <Card key={index} data={data} />
                    )
                    })
                    }

        </div>
     </div>
    </>
  )
}

export default Freebook