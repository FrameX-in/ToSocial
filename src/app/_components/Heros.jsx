import React from 'react'
import Header from './Header'

const Heros = () => {
  return (
<section class="mb-40">
  
    <Header/>
  <div
    class="relative overflow-hidden bg-cover bg-no-repeat bg-[30%] bg-[url('https://source.unsplash.com/white-and-pink-digital-device-Tk9m_HP4rgQ')] h-[300px]">
  </div>

  <div class="w-100 mx-auto px-6 sm:max-w-2xl md:max-w-3xl md:px-12 lg:max-w-5xl xl:max-w-7xl xl:px-32">
    <div class="text-center">
      <div
        class="block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:py-16 md:px-12 mt-[-170px] backdrop-blur-[30px]">
        <h1 class="mt-2 mb-16 text-4xl font-bold tracking-tight md:text-5xl xl:text-6xl">
          The best offer on the market <br /><span class="text-primary">for your business</span>
        </h1>
        <div className ="px-6 py-3  text-white text-center grid place-items-center ">
        <form className=" flex items-center justify-center opacity-100 border-2  bg-indigo-400  ml-3">
          <h1 className=''>tosocial.in/</h1>
          <input type="text " className='w-[40%] py-2 bg-transparent placeholder-white border-white'  placeholder='username'/>
          <button className='bg-slate-400  py-2 px-1'>Join for free</button>
        </form>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Heros