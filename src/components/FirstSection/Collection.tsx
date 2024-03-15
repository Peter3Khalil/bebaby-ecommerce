import { cn } from '@/lib/utils'
import React, { FC } from 'react'
import { IoIosArrowForward } from 'react-icons/io'

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
          'flex h-[450px] w-full flex-col items-start justify-end gap-6 rounded-lg bg-cover bg-center bg-no-repeat px-5 pb-10 text-white',
          className
        )}
        {...props}
      >
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="pr-2">{description}</p>
        <button
          type="button"
          className="flex items-center justify-center rounded-lg border-2 border-black bg-white px-10 py-4 text-lg font-semibold text-black hover:bg-[#ebf2f5]"
        >
          Buy Now <IoIosArrowForward className="ml-[20px]" />
        </button>
        {sliderPoints}
      </div>
    )
  }

export default Collection