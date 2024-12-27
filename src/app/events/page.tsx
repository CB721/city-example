import Carousel from "@/components/Carousel/Carousel";
import { Routes } from "@/constants/Routes";
import ArticleLinks from "@/components/ArticleLinks/ArticleLinks";
import Overlay from "@/components/Carousel/Overlay/Overlay";
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';
import AnchorIcon from '@mui/icons-material/Anchor';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import CardRow from "@/components/CardRow/CardRow";

export default function Events() {
  const today = new Date();
  const date3DaysFromNow = new Date(today).setDate(today.getDate() + 3);
  const date5DaysFromNow = new Date(today).setDate(today.getDate() + 5);
  const date7DaysFromNow = new Date(today).setDate(today.getDate() + 7);

  const fullDate3DaysFromNow = new Date(date3DaysFromNow).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
  const fullDate5DaysFromNow = new Date(date5DaysFromNow).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
  const fullDate7DaysFromNow = new Date(date7DaysFromNow).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });

  return (
    <div>
      <Carousel
        images={[
          {
            src: '/images/pageHeaders/events.jpg',
            alt: 'Events',
            layout: 'fill',
            priority: true,
          }
        ]}
        hideSearch
        overlay={
          <Overlay
            title='Events'
          />
        }
      />
      <ArticleLinks route={Routes.Events} />
      <CardRow
        items={[
          {
            id: '4',
            title: `Special Olympics - ${fullDate3DaysFromNow}`,
            description: "Cloud City is proud to host the Special Olympics this year. Join us for a day of fun and celebration!",
            icon: <AccessibleForwardIcon sx={{ fill: "var(--background)", width: '2rem', height: '2rem' }} />,
          },
          {
            id: '5',
            title: `Sail the Harbor - ${fullDate7DaysFromNow}`,
            description: 'Come mingle with the locals and enjoy a day of sailing on the harbor.',
            icon: <AnchorIcon sx={{ fill: "var(--background)", width: '2rem', height: '2rem' }} />,
          },
          {
            id: '6',
            title: `Food Bank Support Day - ${fullDate5DaysFromNow}`,
            description: 'Join community members in supporting our local food banks.',
            icon: <FoodBankIcon sx={{ fill: "var(--background)", width: '2rem', height: '2rem' }} />,
          },
        ]}
        title='Community Events'
      />
    </div>
  )
}