import Carousel from 'react-bootstrap/Carousel';
import './Gallery.css';

function Gallery() {
  return (
    <div id="gallery" className="py-5 bg-light">
      <h2 className="text-center mb-4">Gallery</h2>
      <Carousel>
        <Carousel.Item>
          <img className="d-block" src="https://images.pexels.com/photos/683039/pexels-photo-683039.jpeg" alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block" src="https://images.pexels.com/photos/2097118/pexels-photo-2097118.jpeg" alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block" src="https://images.pexels.com/photos/1813466/pexels-photo-1813466.jpeg" alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block" src="https://images.pexels.com/photos/887723/pexels-photo-887723.jpeg" alt="Fourth slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Gallery;
