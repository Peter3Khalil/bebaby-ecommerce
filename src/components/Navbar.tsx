import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoSearch } from 'react-icons/io5'
import { SlMenu } from 'react-icons/sl'
export const Navbar = () => {
  return (
    <>
      <section className="flex h-[4.5rem] w-full items-center justify-between gap-12 border-b bg-white px-6 text-black md:h-24">
        <Link href="/" className="shrink-0">
          <Image
            src="/assets/babyshop.svg"
            alt="babyshop logo"
            width={80}
            height={80}
            className="md:h-auto md:w-full"
          />
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
              <span className="ml-3 hidden transition-all duration-300 ease-in-out group-hover:text-[#97d5ee] md:inline">
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
            <span className="absolute bottom-5 left-5 flex size-5 items-center justify-center rounded-full bg-[#f6dcb8] text-xs font-bold leading-none text-black md:bottom-4 md:left-3 md:size-4">
              1
            </span>
            <span className="ml-2 hidden transition-all duration-300 ease-in-out group-hover:text-[#97d5ee] md:inline ">
              $0.00
            </span>
          </li>
        </ul>
      </section>
      <nav className="sticky top-0 flex h-[4rem] w-full items-center justify-between gap-12 border-b bg-white px-6 py-2 text-black shadow-md md:h-16">
        <div className="flex h-full items-center gap-8">
          <div className="flex h-full cursor-pointer items-center gap-5 rounded-lg bg-[#97d5ee] px-5 text-gray-600 hover:bg-[#5dbde3] md:pr-20">
            <SlMenu className="text-3xl md:text-xl" />
            <span className="text-md font-semibold md:text-sm">All Categories</span>
          </div>
          <ul className="gap-8 hidden md:flex">
            {['Shop', 'Blog', 'About', 'Contact'].map((item, index) => (
              <Link href={`/${item.toLowerCase()}`} key={index}>
                <li className="cursor-pointer font-semibold hover:text-[#97d5ee] md:text-sm">{item}</li>
              </Link>
            ))}
          </ul>
        </div>
        <SlMenu className="cursor-pointer text-3xl md:hidden md:text-xl" />
        <div className='hidden font-[500] text-sm cursor-pointer h-full px-8 md:flex items-center justify-center border-2 border-[#f6dcb8] rounded-md hover:border-[#97d5ee]'>
          Outlet
        </div>
      </nav>
    </>
  )
}

const Search = () => {
  const [isFocus, setIsFocus] = React.useState(false)
  const handleOnFocus = () => {
    setIsFocus(true)
  }
  const handleOnBlur = () => {
    setIsFocus(false)
  }
  return (
    <div
      role="search"
      className={cn('hidden w-full items-center gap-3 border px-4 py-[10px] md:flex', {
        'border-black': isFocus,
      })}
    >
      <IoSearch className="shrink-0 text-sm" />
      <input
        type="text"
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        placeholder="Enter your search"
        className={cn('h-full w-full text-sm outline-none', {
          'placeholder-black': isFocus,
        })}
      />
    </div>
  )
}
