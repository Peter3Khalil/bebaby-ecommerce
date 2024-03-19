import { cn } from '@/lib/utils'
import React, { FC } from 'react'
import { IoIosArrowForward } from 'react-icons/io'

type BuyNowButtonProps = {
  className?: string
  props?: React.HTMLProps<HTMLButtonElement>
}
const BuyNowButton: FC<BuyNowButtonProps> = ({ className, props }) => {
  return (
    <button
      className={cn(
        'flex items-center justify-center rounded-lg border-2 border-black bg-white px-10 py-4 md:py-2 md:px-6 md:text-md text-lg font-semibold text-black hover:bg-[#ebf2f5]',
        className
      )}
      {...props}
      type={'button'}
    >
      Buy Now <IoIosArrowForward className="ml-[20px]" />
    </button>
  )
}

export default BuyNowButton
