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
        'flex h-[450px] w-full flex-col items-start justify-end gap-6 bg-cover bg-center bg-no-repeat px-5 pb-10 text-white',
        className
      )}
      {...props}
    >
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="pr-2">{description}</p>
      <BuyNowButton />
      {sliderPoints}
    </div>
  )
}

export default Collection
