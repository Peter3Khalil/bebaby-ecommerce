import { cn } from '@/lib/utils'
import React, { FC } from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { NavMobile } from './NavMobile'
interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}
const Layout: FC<LayoutProps> = ({ children, className, ...props }) => {
  return (
    <div className={cn('flex min-h-full w-full flex-col', className)} {...props}>
      <Navbar />
      <NavMobile />
      <div className='my-6 mb-20 md:mb-0'>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
