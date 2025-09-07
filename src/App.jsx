import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MyNavbar from './components/MyNavbar';
import Hero from './Components/Hero';
import Order from './components/Order';
import About from './components/About';
import Menu from './components/Menu';
import Reservation from './components/Reservation';
import Events from './components/Events';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import MyFooter from './components/MyFooter';
import EventDetails from './components/EventDetails';

function App() {
  return (
    <Router>
      <MyNavbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Menu />
              <Reservation />
              <Events />
              <Gallery />
              <Testimonials />
              <Contact />
            </>
          }
        />

        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/order" element={<Order />} />
      </Routes>

      <MyFooter />
    </Router>
  );
}

export default App;
