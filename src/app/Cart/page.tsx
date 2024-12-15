import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className="mb-[50px] px-4 lg:mx-[200px] text-gray-700">
  {/* Section 1 */}
  <section>
    <h1 className="mt-[70px] text-2xl lg:text-4xl text-gray-700 font-serif text-center lg:text-left">
      Your shopping cart
    </h1>
    <div className="hidden lg:block  lg:flex-row justify-between mt-6 text-center lg:text-left">
      <h5>Product</h5>
      <h5 className="lg:ml-[280px]">Quantity</h5>
      <h5>Total</h5>
    </div>
    <hr className="mt-4" />
  </section>

  {/* Section 2: Product 1 */}
  <section className="mt-8">
    <div className="flex  lg:flex-row justify-between items-center gap-6">
      <div className="flex  lg:flex-row items-center font-sans">
        <div>
          <Image
            height={100}
            width={100}
            alt="Gyrestone Vase"
            src="/bottle.jpeg"
            className="w-[109px] h-[134px]"
          />
        </div>
        <div className=" gap-2 mt-4 lg:mt-0 lg:ml-6 text-center lg:text-left">
          <h3>Gyrestone Vase</h3>
          <p>A timeless ceramic vase with <br /> a tri-color grey glaze</p>
          <h2 className="font-bold">£85</h2>
        </div>
      </div>
      <div className="text-center lg:text-left">1</div>
      <div className="text-center lg:text-left">£85</div>
    </div>
  </section>

  {/* Section 3: Product 2 */}
  <section className="mt-8 mb-6">
    <div className="flex  lg:flex-row justify-between items-center gap-6">
      <div className="flex  lg:flex-row items-center font-sans">
        <div>
          <Image
            height={100}
            width={100}
            alt="Basic White Base"
            src="/green.jpeg"
            className="w-[109px] h-[134px]"
          />
        </div>
        <div className=" gap-2 mt-4 lg:mt-0 lg:ml-6 text-center lg:text-left">
          <h3>Basic White Base</h3>
          <p>Beautiful and simple, this is <br /> one of the classics</p>
          <h2 className="font-bold">£125</h2>
        </div>
      </div>
      <div className="text-center lg:text-left">1</div>
      <div className="text-center lg:text-left">£125</div>
    </div>
  </section>

  <hr />

  {/* Section 4: Subtotal */}
  <section className="flex flex-col lg:flex-row justify-between items-center mt-8">
    <div></div>
    <div className="flex flex-col items-center lg:items-end gap-4">
      <h3 className="text-center lg:text-right">
        Sub Total: <span className="text-2xl lg:text-3xl font-serif">£210</span>
      </h3>
      <p className="text-sm text-center lg:text-right">
        Taxes and shipping are calculated at checkout
      </p>
      <button className="w-[170px] h-[56px] bg-[#2A254B] text-gray-100">
        Go to checkout
      </button>
    </div>
  </section>
</div>
  )
}

export default page
