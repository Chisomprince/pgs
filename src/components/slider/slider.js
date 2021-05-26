import React, { useState } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Slide() {


    const settings = {
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 10,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6.5,
                    slidesToScroll: 6,

                    initialSlide: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2.3,
                    slidesToScroll: 3,
                    initialSlide: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2.3,
                    slidesToScroll: 2
                }
            }
        ]
    };

    return (
        <div className='p-4 w-3/4'>
            <Slider {...settings} className=''>

                <div>
                    <div className='flex flex-col items-center justify-center'>
                        <img class="h-11 w-11 rounded-full" src="/test.png" alt='user' />
                        <span class="text-black dark:text-white font-bold block text-center  text-sm leading-tight">value</span>


                    </div>
                </div>
                <div>
                    <div className='flex flex-col items-center justify-center'>
                        <img class="h-11 w-11 rounded-full" src="/test.png" alt='user' />
                        <span class="text-black dark:text-white font-bold block text-center  text-sm leading-tight">value</span>


                    </div>
                </div>
                <div>
                    <div className='flex flex-col items-center justify-center'>
                        <img class="h-11 w-11 rounded-full" src="/test.png" alt='user' />
                        <span class="text-black dark:text-white font-bold block text-center  text-sm leading-tight">value</span>


                    </div>
                </div>
                <div>
                    <div className='flex flex-col items-center justify-center'>
                        <img class="h-11 w-11 rounded-full" src="/test.png" alt='user' />
                        <span class="text-black dark:text-white font-bold block text-center  text-sm leading-tight">value</span>


                    </div>
                </div>
                <div>
                    <div className='flex flex-col items-center justify-center'>
                        <img class="h-11 w-11 rounded-full" src="/test.png" alt='user' />
                        <span class="text-black dark:text-white font-bold block text-center  text-sm leading-tight">value</span>


                    </div>
                </div>
                <div>
                    <div className='flex flex-col items-center justify-center'>
                        <img class="h-11 w-11 rounded-full" src="/test.png" alt='user' />
                        <span class="text-black dark:text-white font-bold block text-center  text-sm leading-tight">value</span>


                    </div>
                </div>
                <div>
                    <div className='flex flex-col items-center justify-center'>
                        <img class="h-11 w-11 rounded-full" src="/test.png" alt='user' />
                        <span class="text-black dark:text-white font-bold block text-center  text-sm leading-tight">value</span>


                    </div>
                </div>
                <div>
                    <div className='flex flex-col items-center justify-center'>
                        <img class="h-11 w-11 rounded-full" src="/test.png" alt='user' />
                        <span class="text-black dark:text-white font-bold block text-center  text-sm leading-tight">value</span>


                    </div>
                </div>
                <div>
                    <div className='flex flex-col items-center justify-center'>
                        <img class="h-11 w-11 rounded-full" src="/test.png" alt='user' />
                        <span class="text-black dark:text-white font-bold block text-center  text-sm leading-tight">value</span>


                    </div>
                </div>
                <div>
                    <div className='flex flex-col items-center justify-center'>
                        <img class="h-11 w-11 rounded-full" src="/test.png" alt='user' />
                        <span class="text-black dark:text-white font-bold block text-center  text-sm leading-tight">value</span>


                    </div>
                </div>
                <div>
                    <div className='flex flex-col items-center justify-center'>
                        <img class="h-11 w-11 rounded-full" src="/test.png" alt='user' />
                        <span class="text-black dark:text-white font-bold block text-center  text-sm leading-tight">value</span>


                    </div>
                </div>
                <div>
                    <div className='flex flex-col items-center justify-center'>
                        <img class="h-11 w-11 rounded-full" src="/test.png" alt='user' />
                        <span class="text-black dark:text-white font-bold block text-center  text-sm leading-tight"> Value</span>


                    </div>
                </div>
                <div>
                    <div className='flex flex-col items-center justify-center'>
                        <img class="h-11 w-11 rounded-full" src="/test.png" alt='user' />
                        <span class="text-black dark:text-white font-bold block text-center  text-sm leading-tight"> Value</span>


                    </div>
                </div>


            </Slider>

        </div>
    )
}
