import { AppWindow, CircleCheck, HandCoins, Truck,  } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mb-12 px-4 lg:px-10">
  
  <section className="flex flex-col lg:flex-row items-center lg:items-stretch gap-6 lg:gap-0 h-auto lg:h-[584px] m-[20px] lg:mt-[120px]">
    <div className="bg-[#2A254B] text-white h-auto lg:h-[588px] w-full lg:w-[800px] flex flex-col justify-between px-6 py-8">
      <div>
        <p className="text-2xl lg:text-4xl text-slate-200 font-normal">
          The furniture brand for the <br /> future, with timeless designs
        </p>
        <Link href="/Items">
          <button className="w-[170px] h-[56px] text-slate-300 bg-[#F9F9F926] mt-9">
            View collection
          </button>
        </Link>
      </div>
      <p className="text-sm lg:text-base text-slate-300 mt-10 lg:mt-[190px]">
        A new era in eco-friendly furniture with Avelon, the French luxury retail brand <br />
        with nice fonts, tasteful colors, and a beautiful way to display things digitally <br />
        using modern web technologies.
      </p>
    </div>
    <div className="hidden lg:block">
      <Link href="/Product">
        <Image
          width={498}
          height={100}
          alt="Chair"
          src="/tablehome.jpeg"
          className="w-full h-auto lg:w-[498px]"
        />
      </Link>
    </div>
  </section>

  
  <section className="mt-[100px] text-gray-700">
    <h2 className="text-center font-normal text-2xl">What makes our brand different</h2>
    <div className="flex flex-wrap justify-center lg:justify-around mt-[60px] gap-8">
      <div className="text-center max-w-[250px]">
        <Truck />
        <h3 className="my-3 text-lg lg:text-xl">Next day as standard</h3>
        <p>Order before 3pm and get your order <br /> the next day as standard</p>
      </div>
      <div className="text-center max-w-[250px]">
        <CircleCheck />
        <h3 className="my-3 text-lg lg:text-xl">Made by true artisans</h3>
        <p>Handmade crafted goods made with <br /> real passion and craftsmanship</p>
      </div>
      <div className="text-center max-w-[250px]">
        <AppWindow />
        <h3 className="my-3 text-lg lg:text-xl">Unbeatable prices</h3>
        <p>For our materials and quality you <br /> wont find better prices anywhere</p>
      </div>
      <div className="text-center max-w-[250px]">
        <HandCoins />
        <h3 className="my-3 text-lg lg:text-xl">Recycled packaging</h3>
        <p>We use 100% recycled packaging to <br /> ensure our footprint is manageable</p>
      </div>
    </div>
  </section>

  
  <section className="mt-12">
    <h2 className="ml-4 lg:ml-2 text-gray-600 text-2xl lg:text-3xl">New Ceramics</h2>
    <div className="flex flex-wrap justify-center lg:justify-around gap-8 mt-8">
      <div className="group max-w-[300px]">
        <Link href="/Product">
          <Image
            src="/chair.jpeg"
            alt="The Dendy Chair"
            width={300}
            height={380}
            className="w-full h-[380px] mb-4 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
        </Link>
        <div className="text-center text-gray-600">
          The Dendy Chair <br /> £250
        </div>
      </div>
      <div className="group max-w-[300px]">
        <Link href="/Product">
          <Image
            src="/3cups.jpeg"
            alt="The Dendy Chair"
            width={300}
            height={380}
            className="w-full h-[380px] mb-4 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
        </Link>
        <div className="text-center text-gray-600">
          The Dendy Chair <br /> £250
        </div>
      </div>
      <div className="group max-w-[300px]">
        <Link href="/Product">
          <Image
            src="/bottle.jpeg"
            alt="The Stanley Table"
            width={300}
            height={380}
            className="w-full h-[380px] mb-4 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
        </Link>
        <div className="text-center text-gray-600">
          The Stanley Table <br /> £125
        </div>
      </div>
      <div className="group max-w-[300px]">
        <Link href="/Product">
          <Image
            src="/light.jpeg"
            alt="New Lamp"
            width={300}
            height={380}
            className="w-full h-[380px] mb-4 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
        </Link>
        <div className="text-center text-gray-600">
          New Lamp <br /> £250
        </div>
      </div>
    </div>
    <Link href="/Items"><button className="w-[170px] h-[56px] bg-gray-300 hover:bg-gray-400 mt-9 mx-auto block">
      View collection
    </button></Link>
  </section>

  
  <section className="mt-12">
    <h2 className="ml-4 lg:ml-2 text-gray-600 text-2xl lg:text-3xl">Our Popular Products</h2>
    <div className="flex flex-wrap justify-center lg:justify-around gap-8 mt-8">
      <div className="group max-w-[630px]">
        <Image
          src="/sofa.jpeg"
          alt="Sofa"
          width={630}
          height={380}
          className="w-full h-[380px] mb-4 object-cover"
        />
        <div className="text-center text-gray-600">
          The Dendy Chair <br /> £250
        </div>
      </div>
      <div className="group max-w-[300px]">
        <Image
          src="/chair.jpeg"
          alt="Chair"
          width={300}
          height={380}
          className="w-full h-[380px] mb-4 object-cover"
        />
        <div className="text-center text-gray-600">
          The Dendy Chair <br /> £250
        </div>
      </div>
      <div className="group max-w-[300px]">
        <Image
          src="/3cups.jpeg"
          alt="3 Cups"
          width={300}
          height={380}
          className="w-full h-[380px] mb-4 object-cover"
        />
        <div className="text-center text-gray-600">
          The Dendy Chair <br /> £250
        </div>
      </div>
    </div>
    <Link href="/Items"><button className="w-[170px] h-[56px] bg-gray-300 hover:bg-gray-400 mt-9 mx-auto block">
      View collection
    </button></Link>
  </section>

  {/* Footer Section */}
  <section className="bg-gray-200 h-11 mt-11"></section>
  <section className="text-gray-600 mt-[60px]">
    <h2 className="text-center text-2xl lg:text-4xl text-gray-800">
      Join the club and get the benefit
    </h2>
    <p className="text-center text-sm lg:text-base mt-6 lg:mt-9">
      Sign up for our newsletter and receive exclusive offers on <br />
      new ranges, sales, pop-up stores, and more
    </p>
    <div className="flex flex-wrap justify-center gap-4 mt-6 lg:mt-[90px]">
      <div className="bg-gray-200 w-full lg:w-[410px] h-[60px] px-4 flex items-center">
        <input
          type="email"
          placeholder="your@email.com"
          className="bg-gray-200 outline-none w-full text-gray-600"
        />
      </div>
      <div className="bg-[#2A254B] w-[118px] h-[60px] text-white flex justify-center items-center cursor-pointer">
        <Link href="">Sign up</Link>
      </div>
    </div>
  </section>
  
  <section className="mt-[100px] flex flex-col lg:flex-row items-center lg:items-stretch gap-8 lg:gap-0">
    <div className="w-full lg:w-[720px] h-auto lg:h-[603px] flex flex-col text-gray-500 px-6 lg:ml-4">
      <p className="text-xl lg:text-2xl text-gray-800 text-center lg:text-left">
        From studio in London to global brand with <br /> over 400 outlets
      </p>
      <p className="mt-4 lg:mt-6 text-center lg:text-left">
        When we started Avion, the idea was simple. Make high-quality furniture <br />
        affordable and available for the mass market.
      </p>
      <p className="mt-4 lg:mt-7 text-center lg:text-left">
        Handmade, and lovingly crafted furniture and homeware is what we live, <br />
        breathe and design, so our Chelsea boutique became the hotbed for the <br />
        London interior design community.
      </p>
      <button className="w-[170px] h-[56px] bg-gray-300 hover:bg-gray-400 mt-6 lg:mt-[270px] mx-auto lg:mx-0">
        Get in touch
      </button>
    </div>

    <div className="w-full lg:w-[720px]">
      <Image
        width={720}
        height={603}
        alt="Footer Sofa"
        src="/footersofa.jpeg"
        className="w-full h-auto lg:h-[603px]"
      />
    </div>
  </section>
</div>


  );
}
