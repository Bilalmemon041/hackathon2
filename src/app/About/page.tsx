import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AppWindow, CircleCheck, HandCoins, Truck } from 'lucide-react'

const page = () => {
  return (
    <div>
  {/* Section 1 */}
  <section>
    <div className="flex flex-col md:flex-row justify-between items-center h-auto md:h-[277px]">
      <p className="ml-4 md:ml-[60px] text-xl md:text-4xl text-[#2A254B] font-sans text-center md:text-left">
        A brand built on the love of craftsmanship, <br />
        quality and outstanding customer service
      </p>
      <Link href="/Items">
        <button className="w-[170px] h-[56px] bg-gray-100 hover:bg-gray-400 mt-4 md:mt-0 md:mr-[90px]">
          View our product
        </button>
      </Link>
    </div>
  </section>

  {/* Section 2 */}
  <section className="ml-4 md:ml-[30px] mt-[90px] flex flex-col md:flex-row gap-4 md:gap-3">
    <div className="bg-[#2A254B] text-white h-auto md:h-[478px] w-full md:w-[630px] p-6 md:p-[50px]">
      <h4 className="text-2xl md:text-4xl text-slate-200 font-normal">
        It started from small idea
      </h4>
      <p className="text-slate-300 mt-5">
        A global brand with local beginnings, our story began in a <br />
        small studio in South London in early 2014
      </p>
      <Link href="/Items">
        <button className="w-[170px] h-[56px] mt-6 md:mt-[190px] text-slate-300 bg-[#F9F9F926]">
          View collection
        </button>
      </Link>
    </div>
    <div className="hidden lg:block">
      <Image
        width={650}
        height={478}
        alt="Chair"
        src="/roomsofa.jpeg"
        className="w-full md:w-[650px] h-auto md:h-[478px]"
      />
    </div>
  </section>

  {/* Section 3 */}
  <section className="mt-[100px] flex flex-col-reverse lg:flex-row lg:flex-row-reverse gap-6">
    <div className="w-full lg:w-[720px] h-auto lg:h-[603px] flex flex-col text-gray-500 px-6 lg:ml-4">
      <p className="text-xl lg:text-2xl text-gray-800">
        From studio in London to global brand with <br />
        over 400 outlets
      </p>
      <p className="mt-4 lg:mt-6">
        When we started Avion, the idea was simple. Make high-quality furniture
        <br />
        affordable and available for the mass market.
      </p>
      <p className="mt-4 lg:mt-7">
        Handmade, and lovingly crafted furniture and homeware is what we live,
        <br />
        breathe, and design so our Chelsea boutique became the hotbed for the
        <br />
        London interior design community.
      </p>
      <button className="w-[170px] h-[56px] bg-gray-300 hover:bg-gray-400 mt-6 lg:mt-[270px]">
        Get in touch
      </button>
    </div>
    <div className="w-full lg:w-[720px]">
      <Image
        width={100}
        height={100}
        alt="Sofa"
        src="/newsofa.jpeg"
        className="w-full h-auto lg:w-[720px] lg:h-[603px]"
      />
    </div>
  </section>

  {/* Section 4 */}
  <section className="mt-[100px] h-auto lg:h-[355px] text-gray-700">
    <h2 className="text-center font-normal text-xl lg:text-2xl">
      What makes our brand different
    </h2>
    <div className="flex flex-wrap justify-around mt-[60px] gap-8 lg:gap-0">
      <div className="text-center">
        <Truck />
        <h3 className="my-3 text-lg lg:text-xl">Next day as standard</h3>
        <p className="text-sm lg:text-base">
          Order before 3pm and get your order <br />
          the next day as standard
        </p>
      </div>
      <div className="text-center">
        <CircleCheck />
        <h3 className="my-3 text-lg lg:text-xl">Made by true artisans</h3>
        <p className="text-sm lg:text-base">
          Handmade crafted goods made with <br />
          real passion and craftsmanship
        </p>
      </div>
      <div className="text-center">
        <AppWindow />
        <h3 className="my-3 text-lg lg:text-xl">Unbeatable prices</h3>
        <p className="text-sm lg:text-base">
          For our materials and quality you <br />
          won't find better prices anywhere
        </p>
      </div>
      <div className="text-center">
        <HandCoins />
        <h3 className="my-3 text-lg lg:text-xl">Recycled packaging</h3>
        <p className="text-sm lg:text-base">
          We use 100% recycled packaging to <br />
          ensure our footprint is manageable
        </p>
      </div>
    </div>
  </section>

  {/* Section 5 */}
  <section>
    <div className="text-gray-600 mt-[60px] mb-11 px-4">
      <h2 className="text-center text-2xl lg:text-4xl text-gray-800">
        Join the club and get the benefit
      </h2>
      <p className="text-center text-sm lg:text-base mt-6 lg:mt-9">
        Sign up for our newsletter and receive exclusive offers on new <br />
        ranges, sales, pop-up stores, and more
      </p>
      <div className="flex flex-col lg:flex-row justify-center items-center mt-9 lg:mt-[90px] gap-4">
        <div className="bg-gray-200 w-full lg:w-[410px] h-[60px] flex items-center px-5">
          <input
            type="email"
            placeholder="your@email.com"
            className="bg-gray-200 outline-none w-full text-gray-600"
          />
        </div>
        <div className="bg-[#2A254B] w-full lg:w-[118px] h-[60px] text-white flex justify-center items-center cursor-pointer">
          <label>
            <Link href="">Sign up</Link>
          </label>
        </div>
      </div>
    </div>
  </section>
</div>

  )
}

export default page
