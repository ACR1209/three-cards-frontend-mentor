import { bigShouldersDisplay, lexendDeca } from '@/utils/fonts'
import { CardContent } from '@/utils/types'
import Image from 'next/image'
import React from 'react'

type CardProps = {
    card: CardContent
    className?: string
}

function Card({card, className}: CardProps) {
  const backgroundColor = `bg-${card.primaryColor}`

  return (
    <div className={`${className} w-[310px] h-[500px] p-10  ${backgroundColor}  flex flex-col justify-between`}>
        <div className='flex flex-col space-y-10'>
            <Image
                width={70}
                height={50}
                src={card.icon}
                alt='icon'
            />
            <h1 className={`${bigShouldersDisplay.className} uppercase text-veryLightGray text-5xl`}>{card.title}</h1>
            <p className={`${lexendDeca.className} font-normal text-transparentWhite`}>{card.content}</p>
        </div>
        <button className={`${lexendDeca.className} text-${card.primaryColor} bg-transparentWhite hover:bg-transparent hover:border-2 hover:border-transparentWhite hover:text-transparentWhite w-[150px] h-[50px] rounded-full`}>Learn More</button>
    </div>
  )
}

export default Card