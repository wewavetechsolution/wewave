import './App.css';
import { Route, Routes } from 'react-router-dom';
import Banner from './Pages/Home/Banner/Banner';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import About from './Pages/Home/About/About';
import Countup from './Pages/Home/CountUp/CountUp';
import Service from './Pages/Home/Service/Service';
import Gallery from './Pages/Home/Gallery/Gallery';
import Query from './Pages/Home/Query/Query';
import Testimonial from './Pages/Home/Testimonial/Testimonial';
import AboutBanner from './Pages/About/Banner/Banner';
import Description from './Pages/About/About/Description';
import AboutCounter from './Pages/About/Counter/Counter';
import Quality from './Pages/About/Quality/Quality';
import AboutTestimonial from './Pages/About/Testimonial/Testimonial';
import AboutFaq from './Pages/About/Faq/AboutFaq';


function App() {
  return (
    <>
      <Navbar />
      <div className='app'>
        <Routes>
          <Route index element={<><Banner /> <About /> <Countup /> <Service /> <Gallery /> <Query /> <Testimonial /> </>} />
          <Route path='/about' element={<> <AboutBanner /> <Description /> <AboutCounter /> <Quality /> <AboutTestimonial /> <AboutFaq /> </>} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
