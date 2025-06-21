import React from 'react'
import Navbar from './Navbar'

const App = () => {
  return (
    <div className="transition-colors duration-500">
      <Navbar />

      <div className='smooth-transition max-w-4xl mx-auto rounded p-5 bg-blue-500 dark:bg-gray-700 text-gray-800 dark:text-gray-100 mt-20'>Thanushan</div>
    </div>
  )
}

export default App