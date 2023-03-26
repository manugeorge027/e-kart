import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
  
    <Carousel variant="dark">
        
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="slider2.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>E-Commerce Website</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="slider1.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>E-Commerce Second</h5>   
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;