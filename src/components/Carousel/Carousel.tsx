'use client'

import Image, { ImageProps } from 'next/legacy/image';
import Container from '@mui/material/Container';
import useInterval from '@/hooks/useInterval';
import { useState, useEffect, ReactNode, useMemo } from 'react';
import styles from './Carousel.module.css';
import Search from '../Search/Search';

export interface CarouselProps {
  images: ImageProps[];
  disableSearch?: boolean;
  hideSearch?: boolean;
  overlay?: ReactNode;
}

function Carousel({ images, disableSearch, hideSearch, overlay }: CarouselProps) {
  const [carouselImageClassName, setCarouselImageClassName] = useState(styles.fadeIn);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const hasMoreThanOneImage = useMemo(() => images.length > 1, [images.length]);

  useEffect(() => {
    if (!hasMoreThanOneImage) return;

    const timeoutId = setTimeout(() => {
      setCarouselImageClassName(styles.normal);
    }, 9000);

    return () => clearTimeout(timeoutId);
  }, [currentImageIndex, hasMoreThanOneImage, images.length]);

  useInterval(() => {
    if (!hasMoreThanOneImage) return;

    setCurrentImageIndex((prevIndex: number) => (prevIndex + 1) % images.length);
    setCarouselImageClassName(styles.fadeIn);
  }, 10000);

  return (
    <div className={`relative ${hasMoreThanOneImage ? 'h-[75vh]' : 'h-[50vh]'} bg-background`}>
      <div className='absolute top-0 left-0 w-full h-full flex justify-center '>
        <div className='flex justify-center items-center w-full'>
          <Image
            alt=''
            {...images[currentImageIndex]}
            className={`h-96 w-full object-cover ${hasMoreThanOneImage ? carouselImageClassName : ''}`}
          />
          {!hideSearch && (
            <>
              {!disableSearch ? (
                <Search key='valid' autoFocus />
              ) : (
                <Search key='invalid' autoFocus={false} disabled={disableSearch} />
              )}
            </>
          )}
          {!!overlay && (
            <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-background'>
              <Container maxWidth="md" className='relative h-full w-full flex justify-start items-end py-8'>
                {overlay}
              </Container>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Carousel;