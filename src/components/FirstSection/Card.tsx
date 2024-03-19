import Image from 'next/image'
import React, { FC } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
type CardProps = {
  title: string
  description: string
  image: string
}
const Card: FC<CardProps> = ({ title, description, image }) => {
  return (
    <div className="min-h-[250px] w-full rounded-lg bg-[#F0F5F7] px-6 py-8 hover:-translate-y-2 transition duration-200 ease-linear">
      <div className="flex flex-col items-center gap-4 relative text-center">
        <img loading='lazy' width={100} height={100} src={image} alt={title} className="w-[200px] h-auto object-cover mb-12" />
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm">{description}</p>
        <button className='font-semibold flex items-center gap-2'>Buy now <FaArrowRightLong /></button>
      </div>
    </div>
  )
}

export default Card
