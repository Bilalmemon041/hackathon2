import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const page = () => {
  return (
    <div className="mb-[50px] mt-4 px-4">
  {/* Banner Section */}
  <section>
    <Image
      width={1440}
      height={100}
      alt="Product Banner"
      src="/product.PNG"
      className="h-[160px] w-full object-cover"
    />

    {/* Filter Section */}
    <div className="flex flex-wrap gap-6 text-gray-600 mt-[20px] justify-center lg:justify-start">
      <div>
        <select
          name="Category"
          id=""
          className="border border-gray-300 rounded px-4 py-2"
        >
          <option value="">Category</option>
        </select>
      </div>
      <div>
        <select
          name="Product Type"
          id=""
          className="border border-gray-300 rounded px-4 py-2"
        >
          <option value="">Product Type</option>
        </select>
      </div>
      <div>
        <select
          name="Price"
          id=""
          className="border border-gray-300 rounded px-4 py-2"
        >
          <option value="">Price</option>
        </select>
      </div>
      <div>
        <select
          name="Brand"
          id=""
          className="border border-gray-300 rounded px-4 py-2"
        >
          <option value="">Brand</option>
        </select>
      </div>
    </div>
  </section>

  {/* Product List 1 */}
  <section className="mx-2 lg:mx-1">
    <div className="flex flex-wrap justify-around mt-9 gap-8">
      <div className="group w-[300px]">
        <Link href="/Cart">
          <Image
            width={305}
            height={462}
            alt="Chair"
            src="/chair.jpeg"
            className="w-full h-[380px] mb-4 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
        </Link>
        <div className="text-center text-gray-600">
          The Dendy Chair <br /> £250
        </div>
      </div>
      <div className="group w-[300px]">
        <Image
          width={285}
          height={462}
          alt="Light"
          src="/3cups.jpeg"
          className="w-full h-[380px] mb-4 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        <div className="text-center text-gray-600">
          The Dendy Chair <br /> £250
        </div>
      </div>
      <div className="group w-[300px]">
        <Image
          width={285}
          height={462}
          alt="Table"
          src="/bottle.jpeg"
          className="w-full h-[380px] mb-4 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        <div className="text-center text-gray-600">
          The Stanley Table <br /> £125
        </div>
      </div>
      <div className="group w-[300px]">
        <Image
          width={285}
          height={462}
          alt="Lamp"
          src="/light.jpeg"
          className="w-full h-[380px] mb-4 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        <div className="text-center text-gray-600">
          New Lamp <br /> £250
        </div>
      </div>
    </div>
  </section>

  {/* Product List 2 */}
  <section className="mx-2 lg:mx-1">
    <div className="flex flex-wrap justify-around mt-9 gap-8">
      <div className="group w-[300px]">
        <Image
          width={305}
          height={462}
          alt="Chair"
          src="/jumer.jpeg"
          className="w-full h-[380px] mb-4 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        <div className="text-center text-gray-600">
          The Dendy Chair <br /> £250
        </div>
      </div>
      <div className="group w-[300px]">
        <Image
          width={285}
          height={462}
          alt="Light"
          src="/white.jpeg"
          className="w-full h-[380px] mb-4 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        <div className="text-center text-gray-600">
          The Dendy Chair <br /> £250
        </div>
      </div>
      <div className="group w-[300px]">
        <Image
          width={285}
          height={462}
          alt="Table"
          src="/yallow.jpeg"
          className="w-full h-[380px] mb-4 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        <div className="text-center text-gray-600">
          The Stanley Table <br /> £125
        </div>
      </div>
      <div className="group w-[300px]">
        <Image
          width={285}
          height={462}
          alt="Lamp"
          src="/multichair.jpeg"
          className="w-full h-[380px] mb-4 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        <div className="text-center text-gray-600">
          New Lamp <br /> £250
        </div>
      </div>
    </div>
  </section>

  {/* Product List 3 */}
  <section className="mx-2 lg:mx-1">
    <div className="flex flex-wrap justify-around mt-9 gap-8">
      {/* Manually repeated items */}
      <div className="group w-[300px]">
        <Image
          width={305}
          height={462}
          alt="Chair"
          src="/chair.jpeg"
          className="w-full h-[380px] mb-4 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        <div className="text-center text-gray-600">
          The Dendy Chair <br /> £250
        </div>
      </div>
      <div className="group w-[300px]">
        <Image
          width={285}
          height={462}
          alt="Light"
          src="/3cups.jpeg"
          className="w-full h-[380px] mb-4 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        <div className="text-center text-gray-600">
          The Dendy Chair <br /> £250
        </div>
      </div>
      <div className="group w-[300px]">
        <Image
          width={285}
          height={462}
          alt="Table"
          src="/bottle.jpeg"
          className="w-full h-[380px] mb-4 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        <div className="text-center text-gray-600">
          The Stanley Table <br /> £125
        </div>
      </div>
      <div className="group w-[300px]">
        <Image
          width={285}
          height={462}
          alt="Lamp"
          src="/light.jpeg"
          className="w-full h-[380px] mb-4 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        <div className="text-center text-gray-600">
          New Lamp <br /> £250
        </div>
      </div>
      <Link href="/Items"><button  className="w-[170px] h-[56px] text-slate-300 bg-slate-400 mt-9">View collection</button></Link>
    </div>
    
  </section>
</div>

  )
}

export default page
