import Banner from '../Components/Banner'
import Footer from '../Components/Footer'
import Freebook from '../Components/Freebook'
import Navbar from '../Components/Navbar'

import React from 'react'

function Home() {
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white' >    
      <Navbar/>
    <Banner/>
    <hr />
    <Freebook/>
    <hr />
    <Footer/>
    </div>

    </>
  )
}

export default Home