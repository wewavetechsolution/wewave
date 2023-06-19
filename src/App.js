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


function App() {
  return (
    <>
      <Navbar />
      <div className='app'>
        <Routes>
          <Route index element={<><Banner /> <About /> <Countup /> <Service /> <Gallery /> <Query /> <Testimonial /> </>} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
