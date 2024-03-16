import React from 'react'

import { Carousel } from "@material-tailwind/react";
 
export function CarouselDefault({style}) {
  return (
    <Carousel transition={{ duration: 1 }} className={`w-screen carousel relative shadow-md ${style}`}>
      <img
        src="/images/manyshirts.jpg"
        alt="image 1"
        className="h-96 w-full object-cover"
      />
      <img
        src="images/customizing.jpeg"
        alt="image 2"
        className="h-96 w-full object-cover"
      />
      <img
        src="/images/green.jpg"
        alt="image 3"
        className="h-96 w-full object-cover"
      />
    </Carousel>
  );
}
export default CarouselDefault;