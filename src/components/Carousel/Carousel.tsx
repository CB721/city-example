'use client'

import Image, { ImageProps } from 'next/legacy/image';
import useInterval from '@/hooks/useInterval';
import { useState, useEffect } from 'react';
import styles from './Carousel.module.css';
import Search from '../Search/Search';

export interface CarouselProps {
  images: ImageProps[];
}

function Carousel({ images }: CarouselProps) {
  const [carouselImageClassName, setCarouselImageClassName] = useState(styles.fadeIn);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCarouselImageClassName(styles.normal);
    }, 9000);

    return () => clearTimeout(timeoutId);
  }, [currentImageIndex]);

  useInterval(() => {
    setCurrentImageIndex((prevIndex: number) => (prevIndex + 1) % images.length);
    setCarouselImageClassName(styles.fadeIn);
  }, 10000);

  return (
    <div className='relative h-[75vh] bg-background'>
      <div className='absolute top-0 left-0 w-full h-full flex justify-center '>
        <div className='flex justify-center items-center w-full'>
          <Image
            alt=''
            {...images[currentImageIndex]}
            className={`h-96 w-full object-cover ${carouselImageClassName}`}
          />
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Carousel;