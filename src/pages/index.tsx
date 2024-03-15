import {
  BestSeller,
  FirstSection,
  Footer,
  Impressions,
  LatestBlogPosts,
  NavMobile,
  Navbar,
  Promotion,
  TopRatedProducts,
} from '@/components'
import React from 'react'

const Home = () => {
  return (
    <main className="flex min-h-full w-full flex-col bg-white text-black">
      <Navbar />
      <FirstSection />
      <BestSeller />
      <Promotion />
      <TopRatedProducts />
      <Impressions />
      <LatestBlogPosts />
      <Footer />
      <NavMobile />
    </main>
  )
}

export default Home
