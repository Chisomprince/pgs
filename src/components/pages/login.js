import React from 'react'

export default function Login() {
    return (

        <div class="w-full flex items-center justify-center my-auto flex-wrap h-screen p-8">
            {/*  <div class="w-full md:w-1/2 flex flex-col ">
                <h1 className='text-2xl text-gray-900 font-extrabold px-4 pt-8'> ALIONZEE</h1>
                <p className='text-xl text-gray-900 font-bold px-4'> EXPERIENCE A BETTER WAY TO LIVE </p>

            </div> */}


            <div class="flex flex-col justify-center p-8 w-full md:w-1/2">
                <p class="text-center text-3xl">Welcome.</p>

                <div class="flex flex-col pt-4">
                    <label for="email" class="text-lg">Email</label>
                    <input type="email" id="email" placeholder="your@email.com" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                </div>

                <div class="flex flex-col pt-4">
                    <label for="password" class="text-lg">Password</label>
                    <input type="password" id="password" placeholder="Password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                </div>

                <input type="submit" value="Log In" class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8" />

                <div class="text-center pt-12 pb-12">
                    <p>Don't have an account? <a href="register.html" class="underline font-semibold">Register here.</a></p>
                </div>
            </div>

        </div>





    )
}
