
import Header from '../components/Header/Header';
import Carousel from '@/components/Carousel/Carousel';
import CardRow from '@/components/CardRow/CardRow';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PanelRow from '@/components/PanelRow/PanelRow';
import { Button } from '@mui/material';

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
      <PanelRow
        image={{
          src: '/images/splashImages/volunteer.jpg',
          alt: 'Volunteer',
          layout: 'fill',
        }}
        header="Volunteer Opportunities"
        description="Cloud City is seeking passionate volunteers to support our local food bank and help provide essential resources to those in need. By lending your time, you can make a meaningful difference in the lives of families and individuals facing food insecurity in our community. Join us today and be part of a movement that brings hope and nourishment to those who need it most."
        callToAction={<Button sx={{background: "var(--background)"}} variant="contained">Join Us Today!</Button>}
      />
    </div>
  );
}
