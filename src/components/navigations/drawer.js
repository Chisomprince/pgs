import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Drawer() {

    const [open, setOpen] = useState(true)

    return (
        <div className='z-50 hidden lg:block sticky h-screen top-0 left-0  bg-white border-r border-gray-200 px-6'>
            <div className='flex flex-row justify-around items-center p-4 top-4'>
                {
                    open &&
                    <h1 className='text-gray-800 text-lg font-bold mr-4'>popularity</h1>
                }


                <button
                    className=""
                    type="button"
                    style={{ "transition": "all 0.15s ease 0s;" }}
                    onClick={() => setOpen(!open)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="24" height="24">
                        <path fill-rule="evenodd" d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                    </svg>


                </button>
            </div>

            <nav className=" flex flex-col w-full h-screen px- mt-8 pt-10  ">


                <ul className="">
                    <Link to='/'>
                        <li className="mb-2 active:bg-yellow-600  px-4 py-4 text-gray-700 flex flex-row  border-gray-300 hover:text-white   hover:bg-yellow-600  hover:font-bold rounded-lg">
                            <span>
                                <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24">

                                    <g id="🔍-System-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <g id="ic_fluent_home_24_filled" fill="#212121" fill-rule="nonzero">
                                            <path d="M10.5492,2.53274 C11.3872,1.82574 12.6128,1.82574 13.4508,2.53274 L20.2008,8.22728 C20.7076,8.65479 21,9.28403 21,9.94703 L21,19.75 C21,20.7165 20.2165,21.5 19.25,21.5 L16.25,21.5 C15.2835,21.5 14.5,20.7165 14.5,19.75 L14.5,14.75 C14.5,14.3358 14.1642,14 13.75,14 L10.25,14 C9.83579,14 9.5,14.3358 9.5,14.75 L9.5,19.75 C9.5,20.7165 8.7165,21.5 7.75,21.5 L4.75,21.5 C3.7835,21.5 3,20.7165 3,19.75 L3,9.94703 C3,9.28403 3.29241,8.65479 3.79916,8.22728 L10.5492,2.53274 Z" id="🎨-Color"></path>
                                        </g>
                                    </g>
                                </svg>
                            </span>

                            {open &&
                                <a href="#">
                                    <span className="ml-2 active:bg-yellow-600">Home</span>
                                </a>
                            }


                        </li>
                    </Link>
                    <li className="mb-2 px-4  py-4 text-gray-700 flex flex-row  border-gray-300 hover:text-white   hover:bg-yellow-600  hover:font-bold rounded-lg">
                        <span>
                            <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                <g id="🔍-Product-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="ic_fluent_alert_24_regular" fill="#212121" fill-rule="nonzero">
                                        <path d="M12,1.99622391 C16.0499218,1.99622391 19.3566662,5.19096617 19.4958079,9.24527692 L19.5,9.49622391 L19.5,13.5931945 L20.8800025,16.7492056 C20.949058,16.9071328 20.9847056,17.0776351 20.9847056,17.25 C20.9847056,17.9403559 20.4250615,18.5 19.7347056,18.5 L15,18.5014962 C15,20.1583504 13.6568542,21.5014962 12,21.5014962 C10.4023191,21.5014962 9.09633912,20.2525762 9.00509269,18.6777689 L8.99954674,18.4992239 L4.27486429,18.5 C4.10352557,18.5 3.93401618,18.4647755 3.7768624,18.3965139 C3.14366026,18.121475 2.85331154,17.3852002 3.1283504,16.7519981 L4.5,13.594148 L4.50000001,9.4961162 C4.50059668,5.34132493 7.85208744,1.99622391 12,1.99622391 Z M13.4995467,18.4992239 L10.5,18.5014962 C10.5,19.3299233 11.1715729,20.0014962 12,20.0014962 C12.7796961,20.0014962 13.4204487,19.4066081 13.4931334,18.6459562 L13.4995467,18.4992239 Z M12,3.49622391 C8.67983848,3.49622391 6.00047762,6.17047646 6,9.49622391 L6,13.905852 L4.65602014,17 L19.3525351,17 L18,13.9068055 L18.0001102,9.5090803 L17.9963601,9.28387824 C17.8853006,6.05040449 15.2415749,3.49622391 12,3.49622391 Z" id="🎨-Color"></path>
                                    </g>
                                </g>
                            </svg>
                        </span>
                        {open && <a href="#">

                            <span className="ml-2">Notifications</span>
                        </a>}
                    </li>
                    <li className="mb-2 px-4  py-4 text-gray-700 flex flex-row  border-gray-300 hover:text-white   hover:bg-yellow-600  hover:font-bold rounded-lg">
                        <span>

                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                            </svg>

                        </span>
                        {open && <a href="#">

                            <span className="ml-2">Trending</span>
                        </a>}
                    </li>
                    <li className="mb-2 px-4  py-4 text-gray-700 flex flex-row  border-gray-300 hover:text-white   hover:bg-yellow-600  hover:font-bold rounded-lg">
                        <span>

                            <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                <g id="🔍-Product-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="ic_fluent_alert_24_regular" fill="#212121" fill-rule="nonzero">
                                        <path d="M12,1.99622391 C16.0499218,1.99622391 19.3566662,5.19096617 19.4958079,9.24527692 L19.5,9.49622391 L19.5,13.5931945 L20.8800025,16.7492056 C20.949058,16.9071328 20.9847056,17.0776351 20.9847056,17.25 C20.9847056,17.9403559 20.4250615,18.5 19.7347056,18.5 L15,18.5014962 C15,20.1583504 13.6568542,21.5014962 12,21.5014962 C10.4023191,21.5014962 9.09633912,20.2525762 9.00509269,18.6777689 L8.99954674,18.4992239 L4.27486429,18.5 C4.10352557,18.5 3.93401618,18.4647755 3.7768624,18.3965139 C3.14366026,18.121475 2.85331154,17.3852002 3.1283504,16.7519981 L4.5,13.594148 L4.50000001,9.4961162 C4.50059668,5.34132493 7.85208744,1.99622391 12,1.99622391 Z M13.4995467,18.4992239 L10.5,18.5014962 C10.5,19.3299233 11.1715729,20.0014962 12,20.0014962 C12.7796961,20.0014962 13.4204487,19.4066081 13.4931334,18.6459562 L13.4995467,18.4992239 Z M12,3.49622391 C8.67983848,3.49622391 6.00047762,6.17047646 6,9.49622391 L6,13.905852 L4.65602014,17 L19.3525351,17 L18,13.9068055 L18.0001102,9.5090803 L17.9963601,9.28387824 C17.8853006,6.05040449 15.2415749,3.49622391 12,3.49622391 Z" id="🎨-Color"></path>
                                    </g>
                                </g>
                            </svg>
                        </span>
                        {open && <a href="#">
                            <span className="ml-2">Discover</span>
                        </a>}
                    </li>


                </ul>

            </nav>



        </div>
    )
}
