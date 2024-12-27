import Carousel from "@/components/Carousel/Carousel";
import { Routes } from "@/constants/Routes";
import ArticleLinks from "@/components/ArticleLinks/ArticleLinks";
import Overlay from "@/components/Carousel/Overlay/Overlay";

export default function Businesses() {
  return (
    <div>
      <Carousel
        images={[
          {
            src: '/images/pageHeaders/businesses.jpg',
            alt: 'Businesses',
            layout: 'fill',
            priority: true,
          }
        ]}
        hideSearch
        overlay={
          <Overlay
            title='Tools for Business'
          />
        }
      />
      <ArticleLinks route={Routes.Businesses} />
    </div>
  )
}