import Image from 'next/image'
import React, { FC } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '../../ui/button'
import { IoIosArrowForward } from '@/components/shared/Icons'

export const SpecialOffer: FC<React.HTMLProps<HTMLDivElement>> = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        'flex w-full flex-col items-center gap-6 bg-secondary p-12 text-secondary-foreground md:px-16 lg:pt-12',
        className
      )}
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
      <ul className="flex w-full flex-col gap-6 text-center md:flex-row md:justify-between lg:gap-12">
        {['Days', 'Hours', 'Minutes', 'Seconds'].map((item, index) => (
          <li key={index}>
            <p className="text-3xl font-bold leading-none">00</p>
            <span className="text-xl font-semibold text-black/70 lg:text-md">{item.toLowerCase()}</span>
          </li>
        ))}
      </ul>
      <Button className="flex items-center gap-2" variant="default">
        <span className='leading-none'>Buy Now</span> <IoIosArrowForward/>
      </Button>
    </div>
  )
}
