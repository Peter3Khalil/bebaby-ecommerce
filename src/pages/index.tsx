import {
  BestSeller,
  FirstSection,
  Footer,
  Impressions,
  LatestBlogPosts,
  Promotion,
  TopRatedProducts,
} from '@/components'
import React from 'react'

const Home = () => {
  return (
    <main className="flex flex-col bg-background text-foreground px-12 md:px-6 gap-20">
      <FirstSection />
      <BestSeller />
      <Promotion />
      <TopRatedProducts />
      <Impressions />
      <LatestBlogPosts />
      <Footer />
    </main>
  )
}

export default Home
