import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import ChCard from "./components/ChCard";
import NewsCard from "./components/NewsCard";
// import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const images = [
    {
      src: "https://thechildrengreenbook.net/assets/images/book-illustrations/thumbnail/ch1.jpg",
    },
    {
      src: "https://thechildrengreenbook.net/assets/images/book-illustrations/thumbnail/intasab.jpg",
    },
    {
      src: "https://thechildrengreenbook.net/assets/images/book-illustrations/thumbnail/preface.jpg",
    },
    {
      src: "https://thechildrengreenbook.net/assets/images/book-illustrations/thumbnail/ch4.jpg",
    },
    {
      src: "https://thechildrengreenbook.net/assets/images/book-illustrations/thumbnail/ch3.jpg",
    },
    {
      src: "https://thechildrengreenbook.net/assets/images/book-illustrations/thumbnail/ch2.jpg",
    },
    {
      src: "https://thechildrengreenbook.net/assets/images/book-illustrations/thumbnail/ch7.jpg",
    },
    {
      src: "https://thechildrengreenbook.net/assets/images/book-illustrations/thumbnail/ch6.jpg",
    },
    {
      src: "https://thechildrengreenbook.net/assets/images/book-illustrations/thumbnail/ch5.jpg",
    },
    {
      src: "https://thechildrengreenbook.net/assets/images/book-illustrations/thumbnail/ch10.jpg",
    },
    {
      src: "https://thechildrengreenbook.net/assets/images/book-illustrations/thumbnail/ch9.jpg",
    },
    {
      src: "https://thechildrengreenbook.net/assets/images/book-illustrations/thumbnail/ch8.jpg",
    },
    {
      src: "https://thechildrengreenbook.net/assets/images/book-illustrations/thumbnail/ch13.jpg",
    },
    {
      src: "https://thechildrengreenbook.net/assets/images/book-illustrations/thumbnail/ch12.jpg",
    },
    {
      src: "https://thechildrengreenbook.net/assets/images/book-illustrations/thumbnail/ch11.jpg",
    },
    {
      src: "https://thechildrengreenbook.net/assets/images/book-illustrations/thumbnail/ch16.jpg",
    },
    {
      src: "https://thechildrengreenbook.net/assets/images/book-illustrations/thumbnail/ch15.jpg",
    },
    {
      src: "https://thechildrengreenbook.net/assets/images/book-illustrations/thumbnail/ch15.jpg",
    },
  ];

  const news = [
    {
      src: "https://thechildrengreenbook.net/assets/images/media/Screenshot_select-area_20230215162955.png",
    },
    {
      src: "https://thechildrengreenbook.net/assets/images/media/6540602_15693339.jpg",
    },
    {
      src: "https://thechildrengreenbook.net/assets/images/media/Screenshot_select-area_20230215164123.png",
    },
    {
      src: "https://thechildrengreenbook.net/assets/images/media/Screenshot_select-area_20230215164123.png",
    },
  ];
  return (
    <>
      {/* {console.log(images.map(img=>))} */}
      <body className=" bg-white">
        {/* nav starts here */}
        <div className=" grid grid-cols-2 gap-x-8 px-24 py-3  sticky top-0 bg-white shadow-lg mb-6">
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
        {/* nav ends here */}

        {/* hero-section starts here */}

        <div className="">
          <img
            className="h-[400px] w-[70%]   mx-auto"
            src="https://thechildrengreenbook.net/assets/images/banners/banner-02.jpeg"
            alt=""
          />
        </div>
        {/* hero-section ends here */}

        {/* intro  */}
        <div className="w-[80%] mx-auto my-16 ">
          <h1 className="font-bold text-4xl my-6 mx-[40%]">Introduction</h1>
          <p className="w-[80%] mx-auto text-justify">
            Although Climate Change is a global problem, yet Pakistan is one of
            the most affected countries, and therefore warrants some
            extraordinary steps to stem the tide. However, there could be no
            short-term solutions. In fact, considering the quantum of challenge
            the country is faced with, the entire nation needs to be sensitized.
            In this regard, the starting point, as per the School Education
            Department, South Punjab, could be sensitizing the next generation
            by imparting...
          </p>
        </div>
        {/* intro ends here */}

        {/* Chapters here */}

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
        {/* chapters ends here */}

        {/* media section starts here */}
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
        {/* media section ends here */}

        {/* Author Section starts here */}

        <div className="w-[80%] mx-auto text-center mt-10">
          <h1 className="text-2xl font-bold mx-auto my-5"> THE AUTHOR </h1>
          <div className="grid grid-cols-2 gap-8">
          <div>
            <p className="text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias ex quis earum officia repudiandae quibusdam a explicabo
              eius exercitationem incidunt fugit, accusamus tempore? Aut enim
              dolor et neque facere nemo. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptates maiores velit quos corrupti iste labore ex veniam magni quia qui quaerat ducimus temporibus dolores at, accusamus debitis asperiores modi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum enim animi doloribus corporis praesentium sequi incidunt, accusamus aliquam soluta, blanditiis facilis aspernatur beatae nihil cumque nesciunt? Aut repellat ipsa consequuntur?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat alias dicta veniam ratione itaque ullam explicabo officia ducimus, ex maiores odit optio! Maxime sed quisquam animi dolorem, explicabo perspiciatis adipisci.
            </p>
          </div>
          <div>
            {" "}
            <img
              
              src="https://thechildrengreenbook.net/assets/images/sec1.jpg"
              alt=""
            />
          </div>
          </div>
        </div>

        {/* Author Section endss here */}

        <br />
        <br />
        <br />
      </body>
    </>
  );
}

export default App;
