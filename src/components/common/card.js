import React from 'react'
import { Link } from 'react-router-dom'

export default function Card() {
    return (

        <div className=' flex flex-col  w-full max-w-screen-md mb-8 mx-4 divide bg-white shadow-lg rounded-2xl ' >
            <div class="flex flex-row justify-between items-center p-1">
                <div className='flex flex-row items-center'>
                    <img class="h-11 w-11 rounded-full" src="/image.jpg" alt='user' />
                    <div class="ml-1.5 text-sm leading-tight">
                        <span class="text-black dark:text-white font-bold block ">Visualize Value</span>
                        <span class="text-gray-500 dark:text-gray-400 font-normal block">@visualizevalue</span>
                    </div>
                </div>


                <div class="w-max flex">

                    <span class="text-xs ml-1 antialiased">1 Hour ago</span>
                    <svg class="w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                </div>
            </div>

            <img src='image.jpg' alt='post' className='object-cover object-top  max-h-96  mt-2 rounded-2xl border border-gray-100 dark:border-gray-700' />

            <div className='p-4' >
                <h4 className='text-xl font-bold text-gray-600'> Hey man we dont do nude here am not interested but this is  tease</h4>
                <div className='flex'>
                    <p className='mr-2 text-sm font-bold text-blue-400'>stake:</p>
                    <a className='text-sm text-blue-400'> take a picture of your self bathing and show to  to us</a>
                </div>

            </div>
            <div className='flex flex-row justify-between items-center px-4  py-2'>
                <div></div>
                <div class="flex flex-row">
                    <div class="w-max inline-flex items-center">
                        <svg class="w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        <span class="text-xs ml-1 antialiased">100</span>
                    </div>
                    <Link to='/comment' >
                        <div class="w-max inline-flex ml-4 items-center">
                            <svg class="w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                            <span class="text-xs ml-1 antialiased">1975</span>
                        </div>
                    </Link>
                    <div class="w-max inline-flex ml-4 items-center">
                        <svg class="w-6" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">

                            <g id="🔍-Product-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="ic_fluent_share_24_filled" fill="#212121" fill-rule="nonzero">
                                    <path d="M6.746704,4 L10.2109085,4 C10.625122,4 10.9609085,4.33578644 10.9609085,4.75 C10.9609085,5.12969577 10.6787546,5.44349096 10.312679,5.49315338 L10.2109085,5.5 L6.746704,5.5 C5.55584001,5.5 4.58105908,6.42516159 4.50189481,7.59595119 L4.496704,7.75 L4.496704,17.25 C4.496704,18.440864 5.42186559,19.4156449 6.59265519,19.4948092 L6.746704,19.5 L16.247437,19.5 C17.438301,19.5 18.4130819,18.5748384 18.4922462,17.4040488 L18.497437,17.25 L18.497437,16.752219 C18.497437,16.3380054 18.8332234,16.002219 19.247437,16.002219 C19.6271328,16.002219 19.940928,16.2843728 19.9905904,16.6504484 L19.997437,16.752219 L19.997437,17.25 C19.997437,19.2542592 18.4250759,20.8912737 16.4465956,20.994802 L16.247437,21 L6.746704,21 C4.74244483,21 3.10543026,19.4276389 3.00190201,17.4491586 L2.996704,17.25 L2.996704,7.75 C2.996704,5.74574083 4.56906505,4.10872626 6.54754543,4.00519801 L6.746704,4 L10.2109085,4 L6.746704,4 Z M14.5006976,6.54430631 L14.5006976,3.75 C14.5006976,3.12602964 15.20748,2.7899466 15.6876724,3.13980165 L15.7698701,3.20874226 L21.7644714,8.95874226 C22.0442311,9.22708681 22.0696965,9.65811353 21.8408438,9.95607385 L21.7645584,10.0411742 L15.7699571,15.7930263 C15.3196822,16.2250675 14.5877784,15.9476738 14.5078455,15.3589039 L14.5006976,15.2518521 L14.5006976,12.4499835 L14.1799379,12.4437673 C11.5224061,12.4359053 9.2508447,13.5269198 7.31506917,15.745002 C6.81945864,16.3128907 5.88979801,15.876896 6.00952162,15.1327229 C6.83651469,9.99233371 9.60859008,7.08827771 14.1987622,6.57442791 L14.5006976,6.54430631 L14.5006976,3.75 L14.5006976,6.54430631 Z" id="🎨-Color"></path>
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>
                <div class="w-max inline-flex ml-4 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bookmark">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>

                </div>

            </div>
        </div>

    )
}