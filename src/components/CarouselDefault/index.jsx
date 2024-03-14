import React from 'react'

import { Carousel } from "@material-tailwind/react";
 
export function CarouselDefault() {
  return (
    <Carousel transition={{ duration: 1 }} className="mt-5 w-full rounded-xl carousel relative left-2/4 -translate-x-2/4 shadow-lg">
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