"use client"
import React, { useState } from 'react';
import { LinkIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import Link from 'next/link';

const Header = () => {
    let Links =[
        {name:"Home",link:"/"},
        {name:"Pricing",link:"/pricing"},
        {name:"About",link:"/about"},
        {name:"Contact",link:"/contact"},
      ];
      let [open, setOpen] =useState(false);

    return (
    
    <nav
    class="relative flex w-full items-center justify-between bg-[hsla(0,0%,100%,0.55)] py-2  shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] dark:bg-neutral-800 dark:shadow-black/30  lg:flex-wrap lg:justify-start"
    data-te-navbar-ref>
    <div class="flex w-full flex-wrap items-center justify-between px-6">
      <div class="flex items-center">
      <div onClick={()=>setOpen(!open)} className='absolute right-8 top-2 cursor-pointer md:hidden w-7 h-7'>
            {
                 open ? <XMarkIcon/> : <Bars3BottomRightIcon />
                }
             </div>

        <a class="text-primary dark:text-primary-400" href="#!">
          <span class="[&>svg]:ml-2 [&>svg]:mr-3 [&>svg]:h-6 [&>svg]:w-6 [&>svg]:lg:ml-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
            </svg>
          </span>
        </a>
      </div>

      <div class={`!visible ${!open ? 'hidden' : null}  flex-grow basis-[100%] items-center lg:!flex lg:basis-auto `}
         data-te-collapse-item>
        <ul class="mr-auto lg:flex lg:flex-row" data-te-navbar-nav-ref>
        {
                    Links.map((link) => (
                        <li data-te-nav-item-ref>
                        <Link class="block py-2 pr-2 text-neutral-500 transition duration-150 ease-in-out hover:text-neutral-600 focus:text-neutral-600 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 dark:disabled:text-white/30 lg:px-2 [&.active]:text-black/80 dark:[&.active]:text-white/80"
                          href={link.link} data-te-nav-link-ref data-te-ripple-init data-te-ripple-color="light"
                          disabled>{link.name}</Link>
                      </li>))
                }
          
         
        </ul>
        <div className='flex gap-2 md:ml-10 sm:mt-2'>
               <Link href={"/login"} className='btn bg-blue-600 text-white md:ml-4 font-semibold px-2 py-1 rounded duration-500 md:static '>Login</Link>
                <Link href={"/register"} className='btn bg-blue-600 text-white md:ml-4 font-semibold px-2 py-1 rounded duration-500 md:static '>Register</Link>
               </div>
      </div>

      
    </div>
  </nav> 
    );
};

export default Header;