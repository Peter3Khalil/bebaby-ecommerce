import { CollectionPropsData } from '@/types'
import React from 'react'
import Slider from './Slider'
import SpecialOffer from './SpecialOffer'

const collections: CollectionPropsData[] = [
  {
    imageUrl: 'https://themes.muffingroup.com/be/babyshop2/wp-content/uploads/2023/11/babyshop2-home-pic1.webp',
    title: 'Our Orange Collection',
    description: 'Montes orci platea inceptos conubia mauris lacus facilisi tincidunt cras rutrum',
    id: '1',
  },
  {
    imageUrl: 'https://themes.muffingroup.com/be/babyshop2/wp-content/uploads/2023/11/babyshop2-home-pic2.webp',
    title: 'Our yellow Collection',
    description: 'Finibus sagittis felis semper gravida euismo',
    id: '2',
  },
  {
    imageUrl: 'https://themes.muffingroup.com/be/babyshop2/wp-content/uploads/2023/11/babyshop2-home-pic3.webp',
    title: 'Our casual Collection',
    description: 'Pellentesque netus aliquet dictum curae praesent',
    id: '3',
  },
]
export const FirstSection = () => {
  return (
    <section className="flex min-h-[100vh] w-full flex-col p-12 gap-8 *:rounded-lg">
      <Slider collections={collections} />
      <SpecialOffer/>
    </section>
  )
}
