import React from 'react'

export default function DownloadMessage() {
   return (
      <div className='flex justify-between mt-10 bg-brightRed py-3 px-8 gap-10 md:space-x-28 drop-shadow-2xl rounded-md lg:space-x-40'>
         <div className="flex justify-center items-center">
            <p className='text-white font-sm'>
               For the best experience use inshorts app on your smartphone
            </p>
         </div>
         <div className="flex flex-col items-center justify-center gap-1 md:flex-row md:gap-4">
            <img alt="app store" className='h-8 cursor-pointer' src="https://assets.inshorts.com/website_assets/images/appstore.png"></img>
            <img alt="play store" className='h-8 cursor-pointer' src="https://assets.inshorts.com/website_assets/images/playstore.png"></img>
         </div>
      </div>
   )
}
