import React, { useState } from 'react'

export default function Trending() {

    const [open, setOpen] = useState(false)

    return (
        <div className=' pb-10 w-64 bg-white shadow-md p-2 rounded-lg'>
            <div className='flex flex-row  items-center  border-b py-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                </svg>
                <h2 className='text-bold text-gray-600 font-bold p-2'>
                    Trending
            </h2>
            </div>

            <div className=' mt-4'>
                <div className='border-b p-2'>
                    <p className='text-bold text-blue-400 font-bold'>Lady mandy</p>
                    <p className='text-gray-500 dark:text-gray-400 font-normal text-sm '>69.8K comments</p>
                </div> <div className='border-b p-2'>
                    <p className='text-bold text-blue-400 font-bold'>Jenifer okeyeye</p>
                    <p className='text-gray-500 dark:text-gray-400 font-normal text-sm'>69.8K comments</p>
                </div> <div className='border-b p-2'>
                    <p className='text-bold text-blue-400 font-bold'>Jenifer okeyeye</p>
                    <p className='text-gray-500 dark:text-gray-400 font-normal text-sm'>69.8K comments</p>
                </div>
                <div className='border-b p-2'>
                    <p className='text-bold text-blue-400 font-bold'>Jenifer okeyeye</p>
                    <p className='text-gray-500 dark:text-gray-400 font-normal text-sm'>69.8K comments</p>
                </div>
                <div className='border-b p-2'>
                    <p className='text-bold text-blue-400 font-bold'>Jenifer okeyeye</p>
                    <p className='text-gray-500 dark:text-gray-400 font-normal text-sm'>69.8K comments</p>
                </div>
                <div className='border-b p-2'>
                    <p className='text-bold text-blue-400 font-bold'>Jenifer okeyeye</p>
                    <p className='text-gray-500 dark:text-gray-400 font-normal text-sm'>69.8K comments</p>
                </div>


                <div className=''>
                    <p className='text-bold text-blue-400 font-bold'>Sweet mandy love</p>
                    <p className='text-gray-500 dark:text-gray-400 font-normal text-sm'>69.8K comments</p>
                </div>
            </div>


        </div>
    )
}
