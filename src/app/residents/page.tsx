import Carousel from "@/components/Carousel/Carousel";
import PlaceIcon from '@mui/icons-material/Place';
import { Routes } from "@/constants/Routes";
import ArticleLinks from "@/components/ArticleLinks/ArticleLinks";
import Overlay from "@/components/Carousel/Overlay/Overlay";

export default function Residents() {
  return (
    <div>
      <Carousel
        images={[
          {
            src: '/images/pageHeaders/residents.jpg',
            alt: 'Residents',
            layout: 'fill',
            priority: true,
          }
        ]}
        hideSearch
        overlay={
          <Overlay
            title='Support for Residents'
            aside={{
              title: 'Neighborhood Information',
              icon: <PlaceIcon />
            }}
          />
        }
      />
      <ArticleLinks route={Routes.Residents} />
    </div>
  )
}