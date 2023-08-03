import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
    headContainerAnimation
} from '../config/motion';

const Creator = () => {
  
  const [show, setShow] = useState(true);

  return (
    <AnimatePresence>
        {!show && 
            <motion.div
                    key="custom"
                    className="absolute bottom-200 left-20 z-10 ease-in"
                    {...headContainerAnimation}
            >
                <div 
                    className='persona-card rounded py-2.5 px-2 font-bold text-sm bg-blue-500 text-white'>
                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="https://github.com/jaceksl1">
                            <img className="rounded-t-lg" src="./creator.png" alt="" />
                        </a>
                        <div className="p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Hi!</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">My name is Jacek and I am Frontend Developer! Here are some of my works which you can check.</p>
                            <a href="https://github.com/jaceksl1" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Check my GitHub!
                                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        }
        <button 
            type='button' 
            className='w-100 rounded py-2.5 px-2 font-bold text-sm bg-blue-500 text-white'
            onClick={() => setShow(!show)}
            >
                {show === true? 'Creator' : 'Hide'}
        </button>
    </AnimatePresence>
  )
}

export default Creator