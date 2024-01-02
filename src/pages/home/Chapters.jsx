import React from 'react'
import images from '../../components/data/chapters'
import ChCard from '../../components/ChCard'

function Chapters() {
  return (
    <div className="w-[86%] mx-auto text-center">
    <h1 className="my-5 font-bold text-5xl text-orange-500">
      {" "}
      <span className="text-green-500">GREEN</span> BOOK CHAPTERS
    </h1>
    <div className="grid grid-cols-3">
      {images.map((img) => (
        <ChCard src={img.src} />
      ))}
    </div>
  </div>
  )
}

export default Chapters