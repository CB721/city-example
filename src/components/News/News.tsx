'use client'

import Image, { ImageProps } from 'next/legacy/image';
import { useState } from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';
import Container from '@mui/material/Container';
import useInterval from '@/hooks/useInterval';

export interface News {
  thumbnail: ImageProps;
  title: string;
  videoId: string;
}

export interface NewsProps {
  news: News[];
}

const opts: YouTubeProps['opts'] = {
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
  },
};

export default function News({ news }: NewsProps) {
  const [startIndex, setStartIndex] = useState(0);
  const [currNewsOptions, setCurrNewsOptions] = useState<News[]>([]);


  useInterval(() => {
    setStartIndex((prevIndex) => (prevIndex + 1) % news.length);
    const beginning = news.slice(startIndex);
    const end = news.slice(0, startIndex);
    setCurrNewsOptions([...beginning, ...end].slice(0, 3));
  }, 7250);

  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  return (
    <Container maxWidth="xl" className='bg-white mb-12 tablet:mt-[-48px] mt-0'>
      <div className='py-12'>
        <h2 className='text-2xl font-bold text-center text-tertiary mb-4'>City News</h2>
        <div className='tablet:flex block justify-start tablet:h-auto h-full'>
          <div className='tablet:w-1/2 w-full py-4'>
            {currNewsOptions.map((newsItem) => (
              <div key={newsItem.title} className='bg-secondary mb-2 rounded flex justify-between items-center cursor-pointer'>
                <h3 className='text-base max-w-[75%] max-h-24 font-bold text-tertiary px-4 truncate'>{newsItem.title}</h3>
                <div className='w-1/4 h-24 relative'>
                  <Image {...newsItem.thumbnail} className='object-cover w-1/4 h-24 rounded' />
                </div>
              </div>
            ))}
            {news.length > 3 && (
              <button className='text-primary font-bold text-lg mt-4 w-full text-right text-sm'>View More</button>
            )}
          </div>
          <div className='tablet:w-3/4 w-full flex justify-end tablet:h-auto h-[50vh] relative'>
            {currNewsOptions.length > 0 && (
              <YouTube videoId={currNewsOptions[0].videoId} opts={opts} onReady={onPlayerReady} />
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}