
import Header from '../components/Header/Header';
import Carousel from '@/components/Carousel/Carousel';

export default function Home() {
  return (
    <div className='relative'>
      <Header />
      <Carousel
        images={[
          {
            src: '/images/splashImages/city-scape.jpg',
            alt: 'City Scape',
            layout: 'fill',
            priority: true,
          },
          {
            src: '/images/splashImages/aerial-city.jpg',
            alt: 'Aerial City',
            layout: 'fill',
          },
          {
            src: '/images/splashImages/lake.jpg',
            alt: 'Lake',
            layout: 'fill',
          },
          {
            src: '/images/splashImages/mountains.jpg',
            alt: 'Mountains',
            layout: 'fill',
          },
          {
            src: '/images/splashImages/city-sunset.jpg',
            alt: 'City Sunset',
            layout: 'fill',
          },
        ]}
      >

      </Carousel>
    </div>
  );
}
