import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';
function Freebook() {

  const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get('https://bookstore-backend-3wat.onrender.com/book');
                console.log(response);
                setBooks(response.data.data); // Assuming your API response is { success: true, data: [...] }
            } catch (error) {
                console.log(error);
                console.log("Could not fetch the data.");
            }
        };
        fetchBooks();
    }, []);

const filterdata = books.filter((data)=> data.category === "Free")
console.log(filterdata);    
return (
    <>
     <div className='w-[90%] pt-6 flex flex-col  m-auto mt-6 mb-6 '>
        <h1 className='text-3xl font-bold  dark:text-rose-500 md:ml-8' >Free Books</h1>
        <p className='mt-4 text-xl md:ml-8' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, doloribus debitis ratione atque nihil quas fugit recusandae molestias</p>
        <div className='grid md:grid-cols-3 grid-col-1    gap-2 mt-6 ' >
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