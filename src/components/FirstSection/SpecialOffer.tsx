import Image from 'next/image'
import React from 'react'
import BuyNowButton from '../shared/BuyNowButton'

const SpecialOffer = () => {
  return (
    <div className="flex w-full flex-col items-center gap-2 bg-[#cadee5] pt-6 pb-12 text-[#2e3331]">
      <div className="text-center">
        <h2 className="mb-1 text-3xl font-bold leading-none">Special offer</h2>
        <p className="text-md">Baby slippers</p>
      </div>
      <Image
        src="https://themes.muffingroup.com/be/babyshop2/wp-content/uploads/2023/11/babyshop2-product-pic8.webp"
        width={300}
        height={300}
        alt="baby slippers"
        className="h-auto w-[162px]"
      />
      <ul className="flex flex-col gap-6 text-center">
        {['Days', 'Hours', 'Minutes', 'Seconds'].map((item, index) => (
          <li key={index}>
            <p className="text-3xl font-bold leading-none">00</p>
            <span className="text-xl font-semibold">{item}</span>
          </li>
        ))}
      </ul>
      <BuyNowButton className='mt-6' />
    </div>
  )
}

export default SpecialOffer
