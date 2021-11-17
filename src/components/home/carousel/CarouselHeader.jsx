import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';

const CarouselHeader = () => {
    return (
        <div className="main__carousel">
            <Carousel variant="dark">
            <Carousel.Item>
              <img
                className="photo__image"
                src="./img/ecommerce-cover-photo1.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="photo__image"
                src="./img/ecommerce-cover-photo2.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="photo__image"
                src="./img/ecommerce-cover-photo3.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
        </Carousel>
        </div>
    )
}

export default CarouselHeader
