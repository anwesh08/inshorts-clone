import React from 'react'
import NewsCard from './NewsCard'

function NewsContent({ newsArray }) {
  return (
    <>
      <div className='flex flex-col'>
        {newsArray.map((newsItem, i) => (
          <NewsCard newsItem={newsItem} key={newsItem.title} />
        ))}
      </div>
    </>
  )
}

export default NewsContent