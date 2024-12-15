import React from 'react'
import Image from 'next/image'
import { AppWindow, CircleCheck, HandCoins, Truck } from 'lucide-react'
import Link from 'next/link'


const page = () => {
  return (
    <div>
    <section className='flex items-center '>
       <div className='mt-[50px]'>
         <Image 
         width={721}
         height={100}
         alt="blackchair"
         src="/chair2.jpeg"
         className='w-[100]px h-[100]px lg:w-[721px] lg:h-[759px]'/>
         
        </div>
        <div className='ml-[90px] flex flex-col text-gray-700 gap-4'>
          <h1 className='text-4xl'>The Dandy Chair </h1>
          <h3 className='text-2xl mt-4'>£250</h3>
          <h4 className='mt-10'>Description</h4>
          <p className='text-gray-600'>A timeless design, with premium materials features as one of our most popular  <br />
            and iconic pieces. The dandy chair is perfect for any stylish  <br />
            living space with beech legs and lambskin leather upholstery. 
          </p>
          <ol className='list-disc ml-8'>
            <li>Premium MAterial</li>
            <li>Handmade upholstery </li>
            <li>Quality Timeless classic</li>
          </ol>
          <h4 className='mt-10'>Dimensions</h4>
          <div className='flex gap-4 '>
            <div > 
                <h6>Height</h6>
                <p className='mt-3'>110cm</p>
            </div>
            <div> 
                <h6>Width</h6>
                <p className='mt-3'>75cm</p>
            </div>
            <div> 
                <h6>Depth</h6>
                <p className='mt-3'>50cm</p>
            </div>
          </div>
          <div className='flex items-center'>
            <h4>Amuont</h4>
            <div className='flex bg-slate-200 w-[90px] h-[30px] mb-1 justify-around ml-3'>
                <div>-</div>
                <div></div>
                <div>1</div>
                <div></div>
                <div>+</div>

            </div>
            <Link href="/Cart"><button className="w-[170px] h-[56px] ml-[200px] bg-[#2A254B] text-gray-100 ">Add to cart</button></Link>
          </div>

        </div>
        </section>


        <section className=" mt-[100px]">
        <h2 className="ml-2 text-gray-600 text-3xl">You might also like</h2>
      <div className="flex flex-wrap justify-between mt-9 ">

        <div className=" group">
         
         <Image
            width={315}
            height={462}
            alt="chair"
            src="/chair.jpeg"
            className=" w-[330px] h-[380px] mb-4 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
          <div className="">
            The Dendy Chair <br /> £250
          </div>
        </div>
        <div className=" group">
          <Image
            width={285}
            height={100}
            alt="light"
            src="/3cups.jpeg"
            className=" w-[330px] h-[380px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
            <div className="mt-5">
            The Dendy Chair <br /> £250
          </div>
        </div>
        <div className="group">
          <Image
            width={285}
            height={462}
            alt="table"
            src="/bottle.jpeg"
            className=" w-[330px] h-[380px] mb-4 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
          <div className="">
            The Stanley Table <br /> £125
          </div>
        </div>
        <div className=" group">
          <Image
            width={285}
            height={462}
            alt="yellow"
            src="/light.jpeg"
            className=" w-[300px] h-[380px] mb-4 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
          <div className="">
            New Lamp <br /> £250
          </div>
        </div>
      
        <button className="w-[170px] h-[56px] ml-[580px] bg-gray-300 hover:bg-gray-400 mt-9">View collection</button>
      </div>
      </section>

      <section className="mt-[100px] h-[355px] text-gray-700"> 
        <h2 className="text-center font-normal text-2xl">What makes our brand different</h2>
        <div className="flex justify-around mt-[60px] ">
          <div>
            <Truck />
           <h3 className="my-3 text-xl ">Next day as standard </h3>
           <p>Order before 3pm and get your order <br /> the next day as standard</p>
          </div>
          <div>
          <CircleCheck />
            <h3 className="my-3 text-xl">Made by true arrisans</h3>
            <p>Handmade crafted goods made with <br /> real passion and craftmanship</p>
          </div>
          <div>
          <AppWindow/>
            <h3 className="my-3 text-xl">Unbeatable prices</h3>
            <p>For our matrerials and quality you <br /> won't find better prices anywhere</p>
          </div>
          <div>
          <HandCoins />
            <h3 className="my-3 text-xl">Recycled packaging</h3>
            <p>We use 100% recycled packaging to <br />ensure our footprint is manageable</p>
          </div>
        </div>
      </section>

      <section className='mb-[90px]' >
        <div className="text-gray-600 mt-[60px] ">
          <h2 className="text-center text-4xl text-gray-800 ">Join the club and get the benefit</h2>
          <p className="text-center text-base mt-9 ">sign up for our newsletter and receive exclusive offer on now <br />ranges, sales, pop up stores and more</p>
         <div className="flex justify-center mt-[90px]">
          <div className=" bg-gray-200 w-[410px] h-[60px]" >
         <input type="mail" placeholder="your@email.com" className="bg-gray-200 mt-5 ml-5"  />
         </div>
         <div className="bg-[#2A254B] w-[118px] text-white flex justify-center items-center">
         <label ><Link href="">Sign up</Link></label>
         </div>
         </div>
        </div>
      </section>


    </div>
  )
}

export default page
