import { CollectionPropsData } from '@/types'
import React from 'react'
import Slider from './Slider'
import SpecialOffer from './SpecialOffer'
import Card from './Card'
type CardType = {
  title: string
  description: string
  imageUrl: string
  id: string
}
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
const cards: CardType[] = [
  {
    imageUrl: 'https://themes.muffingroup.com/be/babyshop2/wp-content/uploads/2023/11/babyshop2-home-cat1.webp',
    title: 'Our Orange Collection',
    description: 'Montes orci platea inceptos conubia mauris lacus facilisi tincidunt cras rutrum',
    id: '1',
  },
  {
    imageUrl: 'https://themes.muffingroup.com/be/babyshop2/wp-content/uploads/2023/11/babyshop2-home-cat2.webp',
    title: 'Our yellow Collection',
    description: 'Finibus sagittis felis semper gravida euismo',
    id: '2',
  },
  {
    imageUrl: 'https://themes.muffingroup.com/be/babyshop2/wp-content/uploads/2023/11/babyshop2-home-cat3.webp',
    title: 'Our casual Collection',
    description: 'Pellentesque netus aliquet dictum curae praesent',
    id: '3',
  },
]
export const FirstSection = () => {
  return (
    <section className="flex min-h-[100vh] w-full flex-col gap-8 p-12 *:rounded-lg lg:px-6 lg:py-8">
      <div className="flex w-full flex-col gap-8 *:rounded-lg lg:h-[75vh] lg:flex-row">
        <Slider collections={collections} className="lg:h-full lg:w-3/5" />
        <SpecialOffer className="lg:h-full lg:flex-1" />
      </div>
      <ul className="flex flex-col gap-6">
        {cards.map((item, index) => (
          <Card key={index} title={item.title} description={item.description} image={item.imageUrl} />
        ))}
      </ul>
    </section>
  )
}
