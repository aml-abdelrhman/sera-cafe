import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import MyNavbar from './Components/MyNavbar';
import Hero from './Components/Hero';
import Order from './Components/Order';
import About from './Components/About';
import Menu from './Components/Menu';
import Reservation from './Components/Reservation';
import Events from './Components/Events';
import Gallery from './Components/Gallery';
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';
import MyFooter from './Components/MyFooter';
import EventDetails from './Components/EventDetails';

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
