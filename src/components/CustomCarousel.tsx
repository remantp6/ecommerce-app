import React from 'react';
import { Carousel, Image } from 'antd';
import img1 from '../assets/carousel-image1.jpg';
import img2 from '../assets/carousel-image2.jpg';
import img3 from '../assets/carousel-image3.jpg';

const CustomCarousel: React.FC = () => (
  <Carousel autoplay autoplaySpeed={4000}  pauseOnHover={false} dotPosition='right'>
    <Image
      preview={false}
      src={img1}
      alt="image1"
     width={'100%'}
     
      className='!h-[calc(100dvh-400px)] md:!h-[calc(100dvh-150px)] !object-cover'
    />
    <Image
      preview={false}
      src={img2}
      alt="image2"
     width={'100%'}
     
      className='!h-[calc(100dvh-400px)] md:!h-[calc(100dvh-150px)] !object-cover'
    />
    <Image
      preview={false}
      src={img3}
      alt="image3"
     width={'100%'}
     
      className='!h-[calc(100dvh-400px)] md:!h-[calc(100dvh-150px)] !object-cover'
    />
  </Carousel>
);

export default CustomCarousel;
