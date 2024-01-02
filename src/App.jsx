import { useState } from "react";
import Nav from "./components/nav";
import Home from "./pages/home/Home";
import Footer from "./components/footer";
import AboutUs from "./pages/about/AboutUs";


function App() {
  


  
  return (
    <>
      
      <body className=" bg-white">
   
        <Nav/>
        <Home/> 
        {/* <AboutUs/>  */}
        <Footer/>
       
      </body>
    </>
  );
}

export default App;
