import Carousel from "@/components/Carousel/Carousel";
import { Routes } from "@/constants/Routes";
import ArticleLinks from "@/components/ArticleLinks/ArticleLinks";
import Overlay from "@/components/Carousel/Overlay/Overlay";
import { Button } from '@mui/material';
import PanelRow from "@/components/PanelRow/PanelRow";

export default function Jobs() {
  return (
    <div>
      <Carousel
        images={[
          {
            src: '/images/pageHeaders/jobs.jpg',
            alt: 'Visitors',
            layout: 'fill',
            priority: true,
          }
        ]}
        hideSearch
        overlay={
          <Overlay
            title='Jobs & Training'
          />
        }
      />
      <ArticleLinks route={Routes.Jobs} />
      <PanelRow
        image={{
          src: '/images/splashImages/volunteer.jpg',
          alt: 'Volunteer',
          layout: 'fill',
        }}
        header="Volunteer Opportunities"
        description="Cloud City is seeking passionate volunteers to support our local food bank and help provide essential resources to those in need. By lending your time, you can make a meaningful difference in the lives of families and individuals facing food insecurity in our community. Join us today and be part of a movement that brings hope and nourishment to those who need it most."
        callToAction={<Button sx={{ background: "var(--background)" }} variant="contained">Help Your City Today!</Button>}
      />
    </div>
  )
}