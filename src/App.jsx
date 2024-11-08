import { useEffect } from "react"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Products from "./components/Products/Products"
import AOS from "aos"
import "aos/dist/aos.css"
import TopProducts from "./components/TopProducts/TopProducts"
import Banner from "./components/Banner/Banner"
import Subscribe from "./components/subscribe/Subscribe"
import Testimonials from "./components/Testimonials/Testimonials"
import Footer from "./components/Footer/Footer"
const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100
    });
    AOS.refresh();
  }, []);
  return (
    <div>
      <Navbar />
      <Hero />
      <Products />
      <TopProducts />
      <Banner />
      <Subscribe />
      <Products />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App