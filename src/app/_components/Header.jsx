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

        <a class="mr-3" href="#!">
        <div className='font-bold text-xl cursor-pointer flex items-center gap-1 dark:text-white'>
                 <LinkIcon className='w-5 h-5 text-blue-400'/>
                 <span>ToSocial</span>
             </div>
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
               <Link href={"/sign-in"} className='btn bg-blue-500 text-white md:ml-4 font-semibold px-2 py-1 rounded duration-500 md:static '>Login</Link>
                <Link href={"/sign-up"} className='btn bg-blue-500 text-white md:ml-4 font-semibold px-2 py-1 rounded duration-500 md:static '>Register</Link>
               </div>
      </div>

      
    </div>
  </nav> 
    );
};

export default Header;