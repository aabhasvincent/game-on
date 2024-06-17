import React from 'react'

type ButtonProps =  {
    children: string
}
export const SecondaryButton = ({children}:ButtonProps) => {
  return (
    <div className='bg-transparent ring-1 ring-white h-50 w-fit px-5 py-2 rounded-md text-white font-mono text-sm font-semibold mt-2'>
      <button>{children}</button></div>
  ) 
}
