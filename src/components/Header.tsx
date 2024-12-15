

import { CircleUser, Menu, ShoppingCart } from 'lucide-react'
import React from 'react'
import Link from 'next/link';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"





export default function Header() {
  return (
    <div>
      <section className=' h-[60px] flex justify-between items-center'>
        <div></div>
        <div className='font-normal text-[#22202E] ml-[40px] text-2xl'>Avion</div>
        <div className='flex mx-4 gap-3 text-gray-700 '>
            <span><Link href="/About">About</Link></span>
            <span>Contact</span>
            <span>Blog</span>
            <span className='hidden md:block'><ShoppingCart /></span>
            <span className='hidden md:block'><CircleUser  /></span>
        </div>
        <div className='lg:hidden'>
        <Sheet >
  <SheetTrigger><Menu/>  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Avion</SheetTitle>
      <SheetDescription>
      <nav className=' w-auto'>
            <ul className='flex flex-col justify-center gap-11 mt-5 text-gray-400 '>
                <li><Link href="/Product">Plans pots</Link></li>
                <li><Link href="">Ceramics</Link></li>
                <li><Link href="">Tables</Link></li>
                <li><Link href="">Chairs</Link></li>
                <li><Link href="">Cockary</Link></li>
                <li><Link href="">Tableware</Link></li>
                <li><Link href="">Cutlery</Link></li> 
            </ul>
        </nav>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
        </div>
      </section>

      <hr />
      <section>
        <nav className='hidden lg:block w-auto'>
            <ul className='flex justify-center gap-11 mt-5 text-gray-400 '>
                <li><Link href="">Plans pots</Link></li>
                <li><Link href="">Ceramics</Link></li>
                <li><Link href="">Tables</Link></li>
                <li><Link href="">Chairs</Link></li>
                <li><Link href="">Cockary</Link></li>
                <li><Link href="">Tableware</Link></li>
                <li><Link href="">Cutlery</Link></li> 
            </ul>
        </nav>
      </section>
    </div>
  )
}
