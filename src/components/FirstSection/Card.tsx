import React, { FC } from 'react'
import { FaArrowRightLong } from '@/components/shared/Icons'
import { Button } from '../ui/button'
type CardProps = {
  title: string
  description: string
  image: string
}
const Card: FC<CardProps> = ({ title, description, image }) => {
  return (
    <div className="w-full items-center rounded-lg bg-accent px-6 py-8 lg:py-4 text-accent-foreground transition duration-200 ease-linear hover:-translate-y-2">
      <div className="relative flex flex-col items-center gap-4 text-center lg:flex-row">
        <img
          loading="lazy"
          width={100}
          height={100}
          src={image}
          alt={title}
          className="lg:order-2 h-auto w-[200px] lg:w-[170px] object-cover"
        />
        <div className='flex flex-col items-center gap-3 lg:text-left lg:gap-1 lg:items-start h-full'>
          <h3 className="text-xl lg:text-2xl font-bold">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
          <Button className="flex items-center gap-2 px-0" variant={'link'}>
            <span className="leading-none">Buy Now</span> <FaArrowRightLong />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Card
