import { cn } from '@/lib/utils'
import React, { FC } from 'react'
import BuyNowButton from '../shared/BuyNowButton'

type CollectionProps = {
  imageUrl: string
  title: string
  description: string
  className?: string
  props?: React.HTMLProps<HTMLDivElement>
  sliderPoints?: React.ReactNode
}
const Collection: FC<CollectionProps> = ({ imageUrl, title, description, className, props, sliderPoints }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      className={cn(
        'flex max-h-full min-h-[450px] bg-cover bg-center bg-no-repeat px-6 pb-10 text-white lg:px-12',
        className
      )}
      {...props}
    >
      <div className='flex flex-col w-[300px] items-start justify-end gap-6'>
        <h2 className="line-clamp-2 w-full text-3xl font-bold lg:text-4xl">{title}</h2>
        <p className="w-full pr-6">{description}</p>
        <BuyNowButton />
        {sliderPoints}
      </div>
    </div>
  )
}

export default Collection
