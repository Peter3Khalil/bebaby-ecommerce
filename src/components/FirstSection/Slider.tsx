import useInView from '@/hooks/useInView'
import React, { FC } from 'react'
import Collection from './Collection'
import { cn } from '@/lib/utils'
import { type Collection as CollectionType } from '@/types/collection.type'

type SliderType = {
  collections: CollectionType[]
  className?: string
  props?: React.HTMLProps<HTMLDivElement>
}
//TODO: Implement loop when the last element is visible or the first element is visible
const Slider: FC<SliderType> = ({collections,className,props}) => {
  const ref = React.useRef<HTMLDivElement | null>(null)
  const { visibleElement } = useInView({
    parentRef: ref,
  })
  return (
    <div className={cn("flex snap-x snap-mandatory gap-6 overflow-x-auto h-full *:rounded-lg",className)} id='slider' {...props} ref={ref}>
      {collections.map((collection) => (
        <Collection
          key={collection.id}
          imageUrl={collection.imageUrl}
          title={collection.title}
          description={collection.description}
          props={{
            id: collection.id,
          }}
          sliderPoints={
            <ul className="flex gap-2 ">
              {collections.map((item) => {
                return (
                  <li
                    key={item.id}
                    className={cn('size-2 rounded-full bg-black/20', {
                      'bg-white': visibleElement?.id === item.id,
                    })}
                  ></li>
                )
              })}
            </ul>
          }
          className="w-full shrink-0 snap-start"
        />
      ))}
    </div>
  )
}

export default Slider
