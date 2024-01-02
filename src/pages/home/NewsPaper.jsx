import React from 'react'
import news from '../../components/data/news'
import NewsCard from '../../components/NewsCard'
function NewsPaper() {
  return (
    <div className="mx-auto text-center ">
    <h1 className="my-5 font-bold text-4xl text-orange-500">
      {" "}
      What Media Says About Us.
    </h1>

    <div className="imagesCard grid w-[86%] grid-cols-3 gap-5 mx-auto ">
      {news.map((img) => (
        <NewsCard src={img.src} />
      ))}
    </div>
  </div>
  )
}

export default NewsPaper