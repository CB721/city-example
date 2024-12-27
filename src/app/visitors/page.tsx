import Carousel from "@/components/Carousel/Carousel";
import { Routes } from "@/constants/Routes";
import ArticleLinks from "@/components/ArticleLinks/ArticleLinks";
import Overlay from "@/components/Carousel/Overlay/Overlay";

export default function Visitors() {
  return (
    <div>
      <Carousel
        images={[
          {
            src: '/images/pageHeaders/visitors.webp',
            alt: 'Visitors',
            layout: 'fill',
            priority: true,
          }
        ]}
        hideSearch
        overlay={
          <Overlay
            title='Tips for Visitors'
          />
        }
      />
      <ArticleLinks route={Routes.Visitors} />
    </div>
  )
}