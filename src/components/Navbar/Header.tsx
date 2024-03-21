import Image from 'next/image'
import React, { FC } from 'react'
import Search from './Search'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const Header: FC<React.HTMLProps<HTMLDivElement>> = ({ className, ...props }) => {
  return (
    <header
      className={cn(
        'flex h-[4.5rem] w-full items-center justify-between gap-12 border-b bg-background px-6 text-foreground md:h-24',
        className
      )}
      {...props}
    >
      <Link href="/" className="shrink-0">
        <Image src="/assets/babyshop.svg" alt="babyshop logo" width={80} height={80} className="md:h-auto md:w-full" />
      </Link>
      <Search />
      <ul className="mr-2 flex shrink-0 items-center space-x-6">
        <li className="group">
          <a title="Phone number" href="tel:123-456-7890">
            <Image
              src="https://themes.muffingroup.com/be/babyshop2/wp-content/uploads/2023/11/babyshop2-icon2.svg"
              alt="icon"
              width={25}
              height={25}
              className="inline-block h-auto w-[25px]"
            />
            <span className="ml-3 hidden text-muted-foreground transition-all duration-300 ease-in-out group-hover:text-foreground md:inline">
              123-456-7890
            </span>
          </a>
        </li>
        <li className="group relative cursor-pointer">
          <Image
            src="https://themes.muffingroup.com/be/babyshop2/wp-content/uploads/2023/11/babyshop2-icon3.svg"
            alt="icon"
            width={25}
            height={25}
            className="inline-block h-auto w-[25px]"
          />
          <span className="absolute bottom-5 left-5 flex size-5 items-center justify-center rounded-full bg-foreground text-xs font-bold leading-none text-background md:bottom-4 md:left-3 md:size-4">
            1
          </span>
          <span className="ml-2 hidden text-muted-foreground transition-all duration-300 ease-in-out group-hover:text-foreground md:inline">
            $0.00
          </span>
        </li>
      </ul>
    </header>
  )
}

export default Header
