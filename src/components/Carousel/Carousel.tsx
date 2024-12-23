'use client'

import Image, { ImageProps } from 'next/legacy/image';
import { Input } from '@mui/joy';
import SearchIcon from '@mui/icons-material/Search';
import useInterval from '@/hooks/useInterval';
import { useState, useEffect } from 'react';
import styles from './Carousel.module.css';

export interface CarouselProps {
  images: ImageProps[];
}

function Carousel({ images }: CarouselProps) {
  const [carouselImageClassName, setCarouselImageClassName] = useState(styles.fadeIn);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSearching, setIsSearching] = useState(false);

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
    <div className='absolute tablet:top-[68.5px] tablet2:top-[64px] top-[56px] left-0 w-full flex justify-center h-[75vh] bg-background'>
      <div className='flex justify-center items-center w-full'>
        <Image
          {...images[currentImageIndex]}
          className={`h-96 w-full object-cover ${carouselImageClassName}`}
        />
        <div className='relative'>
          <Input
            placeholder="Search"
            variant="soft"
            endDecorator={<SearchIcon />}
            onFocus={() => setIsSearching(true)}
            onBlur={() => setIsSearching(false)}
            className={isSearching ? 'opacity-100' : 'opacity-85'}
            sx={{ backgroundColor: "var(--primary)", outline: "var(--tertiary)" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Carousel;