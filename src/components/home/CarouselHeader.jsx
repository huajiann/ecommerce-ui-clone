import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';

import image1 from '../img/ecommerce-cover-photo1.jpg'
import image2 from '../img/ecommerce-cover-photo2.jpg'
import image3 from '../img/ecommerce-cover-photo3.jpg'

const CarouselHeader = () => {
    return (
        <div className="main__carousel">
            <Carousel variant="dark">
            <Carousel.Item>
              <img
                className="photo__image"
                src={image1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="photo__image"
                src={image2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="photo__image"
                src={image3}
                alt="Third slide"
              />
            </Carousel.Item>
        </Carousel>
        </div>
    )
}

export default CarouselHeader
