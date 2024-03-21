import { cn } from '@/lib/utils'
import React, { FC } from 'react'
import { IoSearch } from '@/components/shared/Icons'

const Search: FC<React.HTMLProps<HTMLDivElement>> = ({ className, ...props }) => {
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
      className={cn('hidden w-full items-center gap-3 border dark:border-muted-foreground/70 pl-4 h-10 md:flex', className, {
        'border-foreground dark:border-foreground': isFocus,
      })}
      {...props}
    >
      <IoSearch className="shrink-0 text-sm" />
      <input
        type="text"
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        placeholder="Enter your search"
        className={cn('h-full w-full bg-inherit text-sm outline-none', {
          'placeholder-foreground': isFocus,
        })}
      />
    </div>
  )
}

export default Search
