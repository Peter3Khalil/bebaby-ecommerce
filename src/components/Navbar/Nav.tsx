import React, { FC } from 'react'
import { SlMenu } from '@/components/shared/Icons'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'

const Nav: FC<React.HTMLProps<HTMLDivElement>> = ({ className, ...props }) => {
  return (
    <nav
      className={cn(
        'sticky top-0 z-10 flex h-[4rem] w-full items-center justify-between gap-12 border-b bg-background px-6 py-2 text-foreground shadow-md md:h-16',
        className
      )}
      {...props}
    >
      <div className="flex h-full items-center gap-8">
        <Button className="flex items-center gap-2">
          <SlMenu className="shrink-0 text-2xl md:text-xl" />
          <span className="shrink-0 text-md font-semibold md:text-sm">All Categories</span>
        </Button>
        <ul className="hidden gap-8 md:flex">
          {['Shop', 'Blog', 'About', 'Contact'].map((item, index) => (
            <Link href={`/${item.toLowerCase()}`} key={index}>
              <li className="cursor-pointer font-semibold  text-muted-foreground hover:text-foreground md:text-sm">
                {item}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <SlMenu className="cursor-pointer text-3xl md:hidden md:text-xl" />
      <Button variant="outline" size="sm" className="hidden md:block">
        Outlet
      </Button>
    </nav>
  )
}

export default Nav
