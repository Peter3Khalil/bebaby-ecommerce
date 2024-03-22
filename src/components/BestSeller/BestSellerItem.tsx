import { cn } from '@/lib/utils'
import Image from 'next/image'
import React, { FC } from 'react'
import { MdOutlineLink } from 'react-icons/md'

interface BestSellerItemProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  children?: React.ReactNode
}

const BestSellerItem: FC<BestSellerItemProps> = ({ className, ...props }) => {
  return (
    <li className={cn('flex min-h-[20vh] flex-col gap-3', className)} {...props}>
      <div className="group relative h-full w-full cursor-pointer">
        <Image
          src={
            'https://themes.muffingroup.com/be/babyshop2/wp-content/uploads/2023/11/babyshop2-product-pic9-350x350.webp'
          }
          alt="Best Seller"
          width={200}
          height={200}
          className="h-auto w-full"
        />
        <div className="absolute text-2xl text-muted-foreground/80 hover:text-foreground -rotate-45 right-0 top-0 m-3 translate-y-full opacity-0 transition-all duration-200 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
         <MdOutlineLink />
        </div>
      </div>
      <div className="space-y-2 text-left">
        <h3 className="text-lg font-semibold leading-none">Product Name</h3>
        <p className="text-sm leading-none">$38.00 – $46.00</p>
      </div>
    </li>
  )
}

export default BestSellerItem
