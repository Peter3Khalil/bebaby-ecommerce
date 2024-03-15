import Link from 'next/link'
import React from 'react'
import { AiOutlineAppstore } from 'react-icons/ai'
import { HiOutlineUser } from "react-icons/hi";
import { HiOutlineShoppingBag } from 'react-icons/hi2'
type LinkType = {
  href: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any
  title?: string
}
const links: LinkType[] = [
  {
    href: '/shop',
    icon: AiOutlineAppstore,
    title: 'Shop',
  },
  {
    href: '/account',
    icon: HiOutlineUser,
    title: 'Account',
  },
  {
    href: '/cart',
    icon: HiOutlineShoppingBag,
    title: 'Cart',
  },
]
export const NavMobile = () => {
  return (
    <div className="fixed bottom-0 z-10 flex h-20 w-full items-center justify-around bg-white text-black md:hidden">
      {links.map((link, index) => (
        <Link href={link.href} key={index} title={link.title}>
          {<link.icon className="text-3xl text-black/70" />}
        </Link>
      ))}
    </div>
  )
}
