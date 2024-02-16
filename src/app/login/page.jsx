"use client"
import React from 'react'
import {signIn} from 'next-auth/react'

const Login = () => {
  return (
    // <body class="bg-white rounded-lg py-5 border-red-100">    
        <div class="container flex flex-col mx-auto rounded-lg ">
           <div class="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable ">
      <div class="flex items-center justify-center w-full lg:p-9 ">
        <div class="flex items-center p-3  ">
          <form class="flex flex-col w-full h-full pb-6 text-center bg-white rounded-3xl">
            <h3 class="mb-3 text-4xl font-extrabold text-gray-900">Login </h3>
            <p class="mb-4 text-gray-700">Enter your email and password</p>
            <button onClick={()=> signIn('google') } class="flex items-center justify-center w-full py-4 mb-6 text-sm font-medium transition duration-300 rounded-2xl text-gray-900 bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:ring-gray-200 cursor-pointer">
              <img class="h-5 mr-2" src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png" alt=""/>
              Sign in with Google
            </button>
            <div class="flex items-center mb-3">
              <hr class="h-0 border-b border-solid border-gray-500 grow"/>
              <p class="mx-4 text-gray-600">or</p>
              <hr class="h-0 border-b border-solid border-gray-500 grow"/>
            </div>
            <label for="email" class="mb-2  text-sm text-start text-gray-900">Email</label>
            <input id="email" type="email" placeholder="Enter Email or Username" class="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-gray-200 mb-7 placeholder:text-gray-700 bg-gray-200 text-dark-gray-900 rounded-2xl"/>
            <label for="password" class="mb-2 text-sm text-start text-gray-900">Password</label>
            <input id="password" type="password" placeholder="Enter a password" class="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-gray-200 placeholder:text-gray-700 bg-gray-200 text-dark-gray-900 rounded-2xl"/>
            <div class="flex flex-row justify-start mb-5">
              <a href="javascript:void(0)" class="mr-4 text-sm font-medium text-purple-blue-500 hover:underline">Forget password?</a>
            </div>
            <button class="w-full px-6 py-5 mb-5 text-sm font-bold leading-none text-white transition duration-300 md:w-96 rounded-2xl hover:bg-blue-600 focus:ring-4 focus:ring-blue-100 bg-blue-400">Sign In</button>
            <p class="text-sm leading-relaxed text-gray-900">Not registered yet? <a href="javascript:void(0)" class="font-bold text-gray-700 hover:underline">Create an Account</a></p>
          </form>
        </div>
      </div>
    </div>
        </div>
        
    // </body>
  )
}

export default Login