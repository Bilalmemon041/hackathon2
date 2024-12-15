import React from 'react'
import Link from 'next/link'
import { Facebook, Instagram, LucideLinkedin, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <div className='bg-[#2A254B]'>
    <div className=' flex justify-around  '>
        <section className='mt-[50px]' >
        <h2 className="text-gray-100">
          Menu
        </h2>
        <nav className="list-none mb-10  flex flex-col gap-2">
          <li className='mt-5'>
            <a className="text-gray-300 ">New arrivals</a>
          </li>
          <li>
            <a className="text-gray-300 ">Best selles</a>
          </li>
          <li>
            <a className="text-gray-300 ">Recently viewed</a>
          </li>
          <li>
            <a className="text-gray-300 ">Populer this week</a>
          </li>
          <li>
            <a className="text-gray-300 ">All product</a>
          </li>
        </nav>
        </section>
        <section className='mt-[50px]'>
        <h2 className="text-gray-100">
          Categories
        </h2>
        <nav className="list-none mb-10 bg-[#2A254B] flex flex-col gap-2">
          <li className='mt-5'>
            <a className="text-gray-300 ">Crockery</a>
          </li>
          <li>
            <a className="text-gray-300 ">Home ware</a>
          </li>
          <li>
            <a className="text-gray-300 ">Plant port</a>
          </li>
          <li>
            <a className="text-gray-300 ">Chair</a>
          </li>
          <li>
            <a className="text-gray-300 ">Furniture</a>
          </li>
          <li>
            <a className="text-gray-300 ">Crockary</a>
          </li>
        </nav>
        </section>
        <section className='mt-[50px]'>
        <h2 className="text-gray-100">
          Our Company
        </h2>
        <nav className="list-none mb-10 bg-[#2A254B] flex flex-col gap-2">
          <li className='mt-5'>
            <a className="text-gray-300 ">About us</a>
          </li>
          <li>
            <a className="text-gray-300 ">Vecancies</a>
          </li>
          <li>
            <a className="text-gray-300 ">Contact us</a>
          </li>
          <li>
            <a className="text-gray-300 ">Privacy</a>
          </li>
          <li>
            <a className="text-gray-300 ">Return policy</a>
          </li>
        </nav>
        </section>
        <section className='lg:flex hidden'>
        <div className=" bg-gray-100 w-[410px] h-[60px] mt-[50px]" >
         <input type="mail" placeholder="your@email.com" className="bg-gray-100  mt-5 ml-5"  />
         </div>
         <div className="bg-gray-300 mt-[50px] w-[118px] h-[60px] text-white flex justify-center items-center">
         <label ><Link href="">Sign up</Link></label>
         </div>
        </section>

        <hr />

    </div>

    <section className='text-gray-200 flex justify-between mx-7'>
          <div>Copy Right 2022 Avion LTD</div>
          <div className='flex gap-6'>
          <LucideLinkedin />
          <Facebook />
          <Instagram />
          <Twitter />
          </div>
        </section>
    </div>
  )
}

export default Footer
