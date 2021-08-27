import React from 'react'
import { Link } from 'react-router-dom'

export default function User() {
    return (

        <div>


            <div class="w-full flex justify-center items-center max-w-screen-md mb-8  divide">
                <div class="mx-auto h-full rounded-lg overflow-hidden shadow-lg my-2 bg-white">
                    <div class="relative" style={{ "clipPath": " polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw))" }}>
                        <img class="w-full" src="/image.jpg"
                            alt="Profile image" />
                        <div class="text-center absolute w-full" style={{ "bottom": " 4rem" }}>
                            <p class="text-white tracking-wide uppercase text-lg font-bold">John Doe</p>
                            <p class="text-gray-400 text-sm">@johndoe</p>
                        </div>
                    </div>
                    <div class="relative flex justify-between items-center flex-row px-6 z-50 -mt-10">
                        <p class="flex items-center text-gray-400"><span
                            class="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>online</p>
                        <Link to='/edit_profile'>
                            <button
                                class="p-4 bg-red-600 rounded-full hover:bg-red-500 focus:bg-red-700 transition ease-in duration-200 focus:outline-none">
                                <svg viewBox="0 0 20 20" enable-background="new 0 0 20 20" class="w-6 h-6">
                                    <path fill="#FFFFFF" d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                  C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                  C15.952,9,16,9.447,16,10z" />
                                </svg>
                            </button></Link>
                    </div>
                    <div class="pt-6 pb-8 text-gray-600 text-center">
                        <p>Fullstack Developer </p>
                        <p class="text-sm">Coding from Planet Earth</p>
                    </div>

                    <div class="pb-10 uppercase text-center tracking-wide flex justify-around">
                        <div class="posts">
                            <p class="text-gray-400 text-sm">Posts</p>
                            <p class="text-lg font-semibold text-blue-300">76</p>
                        </div>
                        <div class="followers">
                            <p class="text-gray-400 text-sm">Followers</p>
                            <p class="text-lg font-semibold text-blue-300">964</p>
                        </div>
                        <div class="following">
                            <p class="text-gray-400 text-sm">Following</p>
                            <p class="text-lg font-semibold text-blue-300">34</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
