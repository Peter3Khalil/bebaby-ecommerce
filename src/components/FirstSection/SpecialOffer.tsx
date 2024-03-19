import Image from 'next/image'
import React, { FC } from 'react'
import BuyNowButton from '../shared/BuyNowButton'
import { cn } from '@/lib/utils'
type SpecialOfferProps = {
  className?: string
  props?: React.HTMLProps<HTMLDivElement>
}
const SpecialOffer: FC<SpecialOfferProps> = ({ className, props }) => {
  return (
    <div
      className={cn('flex w-full flex-col items-center gap-2 bg-[#cadee5] md:px-16 pb-12 pt-6 lg:pt-12 text-[#2e3331]', className)}
      {...props}
    >
      <div className="text-center">
        <h2 className="mb-1 text-3xl font-bold leading-none lg:text-4xl">Special offer</h2>
        <p className="text-md">Baby slippers</p>
      </div>
      <Image
        src="https://themes.muffingroup.com/be/babyshop2/wp-content/uploads/2023/11/babyshop2-product-pic8.webp"
        width={300}
        height={300}
        alt="baby slippers"
        className="h-auto w-[162px]"
      />
      <ul className="flex flex-col gap-6 text-center md:justify-between w-full md:flex-row lg:gap-12">
        {['Days', 'Hours', 'Minutes', 'Seconds'].map((item, index) => (
          <li key={index}>
            <p className="text-3xl font-bold leading-none">00</p>
            <span className="text-xl font-semibold lg:text-md text-black/70">{item.toLowerCase()}</span>
          </li>
        ))}
      </ul>
      <BuyNowButton className="mt-6" />
    </div>
  )
}

export default SpecialOffer
