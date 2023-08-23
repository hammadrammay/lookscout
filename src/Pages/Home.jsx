import React from 'react'
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import Message from "../Components/Message";
import Features from "../Components/Features";
import Redefining from "../Components/Redefining";
import Testimonial from "../Components/Testimonial";
import Post from "../Components/Post";
import Customers from "../Components/Customers";
import Welcome from "../Components/Welcome";

import Footer from "../Components/Footer";



const Home = () => {
  return (
   <>
    <Navbar />
<Header />
<Message />
<Features />
<Redefining />
<Testimonial />
<Post />
<Customers />
<Welcome />
<Footer />
   </>
  )
}

export default Home