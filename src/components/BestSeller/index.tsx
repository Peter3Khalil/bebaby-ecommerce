import Image from 'next/image'
import React from 'react'
import BestSellerItem from './BestSellerItem'

export const BestSeller = () => {
  return (
    <section className="flex w-full flex-col items-center gap-12">
      <div className="flex w-fit flex-col items-center gap-1 text-center">
        <Image
          src="https://themes.muffingroup.com/be/babyshop2/wp-content/uploads/2023/11/babyshop2-home-pic4.svg"
          alt="Best Seller"
          width={50}
          height={50}
        />
        <p>Kids love this stuff</p>
        <h2 className="text-3xl font-bold leading-none">Our Bestsellers</h2>
      </div>
      <ul className='w-full grid grid-cols-2 gap-4 lg:grid-cols-4 lg:px-12 justify-center'>
        {Array.from({ length: 20 }).map((_, index) => (
          <BestSellerItem key={index} />
        ))}
      </ul>
    </section>
  )
}
