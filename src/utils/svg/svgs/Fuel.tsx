'use client'
import SVGProps from '@/models/SVGProps'
import React, { FC } from 'react'

const Fuel: FC<SVGProps> = ({
  width = '22px',
  height = '22px',
  Dref,
  className,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 24 24"
      data-ref={Dref}
      height={height}
      width={width}
      fill="none"
    >
      <path
        d="M4 5C4 4.44772 4.44772 4 5 4H12C12.5523 4 13 4.44772 13 5V21H4V5Z"
        strokeLinejoin="round"
        strokeLinecap="round"
        stroke="currentColor"
        strokeWidth="2"
        data-ref={Dref}
      />
      <path
        d="M13 11.5H18V19C18 20.1046 18.8954 21 20 21V21C21.1046 21 22 20.1046 22 19V9M17.5 2L20.5 4.66667M20.5 4.66667L22 6V9M20.5 4.66667V9H22"
        strokeLinejoin="round"
        strokeLinecap="round"
        stroke="currentColor"
        strokeWidth="2"
        data-ref={Dref}
      />
      <path
        d="M15 21L2 21"
        strokeLinejoin="round"
        strokeLinecap="round"
        stroke="currentColor"
        strokeWidth="2"
        data-ref={Dref}
      />
      <path
        d="M10 8L7 8"
        strokeLinejoin="round"
        strokeLinecap="round"
        stroke="currentColor"
        strokeWidth="2"
        data-ref={Dref}
      />
    </svg>
  )
}

export default Fuel
