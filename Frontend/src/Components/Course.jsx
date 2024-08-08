import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Card from './Card';
import Footer from './Footer';
import axios from 'axios';

function Course() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get('https://bookstore-backend-3wat.onrender.com/book');
                const booksData = response.data.data; // Adjust based on your actual API response structure

                // Filter books based on the category if needed
                const filteredBooks = booksData.filter(book => book.category !== "Free");
                
                setBooks(filteredBooks);
            } catch (error) {
                setError("Could not fetch the data.");
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchBooks();
    }, []);

    return (
        <>
            <div className='dark:bg-slate-900'>
                <Navbar />
                <div className='w-[90%] m-auto flex flex-col dark:bg-slate-900 dark:text-white justify-center items-center gap-2 mt-14 mb-10'>
                    <div>
                        <h1 className='text-2xl dark:text-cyan-400 text-purple-800 font-bold mt-4'>Warm Welcome to here</h1>
                    </div>
                    <div>
                        <p className='text-xl ml-10 mr-5'>Here is all books for reading, you have to pay some amount</p>
                    </div>
                    <div className='w-[90%] dark:bg-slate-900 dark:text-white grid md:grid-cols-3 grid-cols-1'>
                        {loading ? (
                            <p>Loading...</p>
                        ) : error ? (
                            <p>{error}</p>
                        ) : (
                            books.map((book, index) => (
                                <Card key={index} data={book} />
                            ))
                        )}
                    </div>
                </div>
                <hr />
                <Footer />
            </div>
        </>
    );
}

export default Course;
