
import Header from '../components/Header/Header';
import Carousel from '@/components/Carousel/Carousel';
import CardRow from '@/components/CardRow/CardRow';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PanelRow from '@/components/PanelRow/PanelRow';
import News from '@/components/News/News';
import { Button } from '@mui/material';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <div>
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
      />
      <CardRow
        items={[
          {
            id: '1',
            title: 'City Directory',
            description: "Contacts for the City's officials & departments",
            icon: <ChatBubbleOutlineIcon sx={{ fill: "var(--background)", width: '2rem', height: '2rem' }} />,
          },
          {
            id: '2',
            title: 'Neighborhood Info',
            description: 'Find your local trash pickup day, utilities, and more',
            icon: <MapsHomeWorkIcon sx={{ fill: "var(--background)", width: '2rem', height: '2rem' }} />,
          },
          {
            id: '3',
            title: 'Meetings & Agendas',
            description: 'City Council and Committee meetings & agendas',
            icon: <CalendarMonthIcon sx={{ fill: "var(--background)", width: '2rem', height: '2rem' }} />,
          },
        ]}
      />
      <News
        news={[
          {
            thumbnail: {
              src: '/images/splashImages/traffic.jpg',
              alt: 'Traffic',
              layout: 'fill',
            },
            title: 'Traffic update',
            videoId: '4pSkeZ_afnk'
          },
          {
            thumbnail: {
              src: '/images/splashImages/animal-crossing.jpg',
              alt: 'New animals at local zoo',
              layout: 'fill',
            },
            title: 'New animals at local zoo',
            videoId: 'oRDRfikj2z8'
          },
          {
            thumbnail: {
              src: '/images/splashImages/rain.jpg',
              alt: 'Weather',
              layout: 'fill',
            },
            title: 'Weather News',
            videoId: 'Z_XWw_E0FWs'
          },
          {
            thumbnail: {
              src: '/images/splashImages/speech.jpg',
              alt: 'Mayor speech',
              layout: 'fill',
            },
            title: 'Mayor speaks on supporting local children',
            videoId: 'Yp5KDg6mx_Q'
          },
        ]}
      />
      <PanelRow
        image={{
          src: '/images/splashImages/volunteer.jpg',
          alt: 'Volunteer',
          layout: 'fill',
        }}
        header="Volunteer Opportunities"
        description="Cloud City is seeking passionate volunteers to support our local food bank and help provide essential resources to those in need. By lending your time, you can make a meaningful difference in the lives of families and individuals facing food insecurity in our community. Join us today and be part of a movement that brings hope and nourishment to those who need it most."
        callToAction={<Button sx={{background: "var(--background)"}} variant="contained">Help Your City Today!</Button>}
      />
      <Footer />
    </div>
  );
}
