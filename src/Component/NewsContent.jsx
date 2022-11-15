import React from 'react'
import NewsCard from './NewsCard'

function NewsContent({ newsArray, loadMore, setLoadMore, newsResult }) {
  const handleClick = () => {
    console.log("Clicked")
    setLoadMore(loadMore + 20)
  }
  return (
    <>
      <div className='flex flex-col'>
        {newsArray.slice(0, loadMore).map((newsItem, i) => (
          <NewsCard newsItem={newsItem} key={newsItem.title} />
        ))}
        {loadMore <= newsResult && (
          <div className='flex'>
            <div className='flex items-center mx-auto'>
              <hr />
              <button onClick={handleClick} className='mt-8 rounded-3xl shadow-xl shadow-gray-600 bg-red-600 px-5 py-2 text-white text-md font-bold'>Load More</button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default NewsContent