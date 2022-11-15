import React from 'react'

export default function Footer() {
  return (
    <>
      <div className="flex flex-col items-center-justify-center bg-slate-800 w-full px-10 mt-8">
         <div className="flex items-center mx-auto my-2 py-2">
            <span className="text-xl text-white font-normal">
               <b>Inshorts Clone Made By</b> :- <a href="https://github.com/anwesh08" target="_blank" rel='noreferrer' className='text-[#fafaf9]'>Anwesh Mishra</a>
            </span>
         </div>
         <div className="border-b-2 border-white w-full"></div>
         <div className="flex items-center mx-auto py-2 gap-40 lg:gap-96 my-2">
            <img src="/images/github.svg" alt="" className='h-10 cursor-pointer bg-white' />
            <img src="/images/linkedin.svg" alt="" className='h-10 cursor-pointer bg-white' />
         </div>
      </div>
    </>
  )
}
