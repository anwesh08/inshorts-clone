import React from 'react'

export default function NewsCard({ newsItem }) {
   const fulldate = new Date(newsItem.publishedAt)
   let date = fulldate.toString().split(" ")
   const hour = parseInt(date[4].substring(0, 2))
   const time = hour > 12 ? true : false
   return (
      <>
         {console.log(newsItem)}
         <div className="flex justify-between mx-auto mt-10 space-x-40 px-5 py-3 shadow-lg shadow-gray-600 bg-neutral-100 border-2 border-slate-700 rounded-xl w-7/12">
            <div className="flex flex-col h-fit w-fit lg:flex-row mx-auto">
               <img className='w-full h-fit rounded-lg lg:w-72 lg:h-64' alt={newsItem.title} src={newsItem.urlToImage ? newsItem.urlToImage : "http://www.aaru.edu.jo/websites/aaru2/wp-content/plugins/learnpress/assets/images/no-image.png?Mobile=1&Source=%2F%5Flayouts%2Fmobile%2Fdispform%2Easpx%3FList%3D78b536db%252De7c7%252D45d9%252Da661%252Ddb2a2aa2fbaf%26View%3D6efc759a%252D0646%252D433c%252Dab6e%252D2f027ffe0799%26RootFolder%3D%252Fwebsites%252Faaru2%252Fwp%252Dcontent%252Fplugins%252Flearnpress%252Fassets%252Fimages%26ID%3D4786%26CurrentPage%3D1"} />
               <div className="flex flex-col justify-between px-5 w-[70%]">
                  <div className="container">
                     <div className='container'>
                        <span className='text-xl font-bold'>{newsItem.title}</span>
                     </div>
                     <div className="container mb-1">
                        <span className="text-sm font-normal text-gray-600">
                           <a className='text-black font-bold' href={newsItem.url} rel="noreferrer" target="_blank"><b>Shorts </b></a>{" "}
                           <span>
                              {" "} by {newsItem.author ? newsItem.author : "unknown"} | {" "}
                              {
                                 time ? `${hour - 12} : ${date[4].substring(3, 5)} P.M` : `${hour}:${date[4].substring(3, 5)} A.M`} {" "}
                              on {date[2]} {date[1]} {date[3]}, {date[0]}
                           </span>
                        </span>
                     </div>
                     <div className="container">
                        <p className='text-sm'>{newsItem.description}</p>
                     </div>
                  </div>
                  <div className="container">
                     <span><b>Read More At...{" "}</b><a href={newsItem.url} rel="noreferrer" target="_blank" className=''><b>{newsItem.source.name}</b></a></span>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}
