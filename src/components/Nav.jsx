import React from 'react'

function Nav() {
  return (
   
        <div className=" grid grid-cols-2 gap-x-8 px-24 py-3  sticky top-0 bg-white shadow-lg mb-6 z-10">
          <div className="logo w-64">
            <img
              src="https://thechildrengreenbook.net/assets/images/_logo.png"
              alt=""
            />
          </div>
          <div className="nav mt-5 0">
            <ul className="md:flex gap-4 hidden ">
              <li className="px-2 font-semibold hover:text-green-600 cursor-pointer">
                HOME
              </li>
              <li className="px-2 font-semibold hover:text-green-600 cursor-pointer">
                ABOUT
              </li>
              <li className="px-2 font-semibold hover:text-green-600 cursor-pointer">
                REVIEW
              </li>
              <li className="px-2 font-semibold hover:text-green-600 cursor-pointer">
                GALLERY
              </li>
              <li className="px-2 font-semibold hover:text-green-600 cursor-pointer">
                MIYAWAKI FOREST
              </li>
            </ul>

            <div className="md:hidden ">
              <a href="" className="font-semibold text-4xl ms-48">
                {" "}
                &#8801;
              </a>
            </div>
          </div>
        </div>


  )
}

export default Nav