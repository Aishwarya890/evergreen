// Inside Home.jsx
import InfoSection from "../components/InfoSection"
import Home from "../components/Home";
import ProductCarousel from  "../components/ProductCarousel";
import TestimonialCarousel from "../components/TestimonialCarousel";
import PromoBanner from "../components/PromoBaner";
import BlogSection from "../components/BlogSection";
const Home1 = () => {
  return (
    <div>
    
       <Home/>
      {/* Info Section */}
      <InfoSection />
      <ProductCarousel/>
      <TestimonialCarousel></TestimonialCarousel>
      <PromoBanner/>
      <BlogSection/>
      {/* Add more sections as needed */}

      
    </div>
  );
};

export default Home1;
